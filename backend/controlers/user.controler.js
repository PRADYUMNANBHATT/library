import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import sendEmailOtp from "../utils/sendEmailOtp.js";
import EmailVerificationModel from "../models/emialverify.model.js";
import generateToken from "../utils/generateToken.js";
import setTokencookies from "../utils/setTokencookies.js";
import refreshAccessToken from "../utils/refreshAccessToken.js";
import userRefreshTokenModel from "../models/userRefreshToken.js";
import transporter from "../config/emailconfig.js";
import jwt from "jsonwebtoken";
class userController {
  //user registration
  static userRegistration = async (req, res) => {
    try {
      const { name, email, password, password_confirm } = req.body;
      if (!name || !email || !password || !password_confirm) {
        return res.status(400).json({
          status: "failed",
          message: "All fields Required",
        });
      }
      if (password !== password_confirm) {
        return res.status(400).json({
          status: "failed",
          message: "password mismatch",
        });
      }
      //check email already exist
      const existinguser = await userModel.findOne({ email });
      if (existinguser) {
        return res
          .status(500)
          .json({ status: "failed", message: "Email already exist" });
      }
      //generrate salt and hash password
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashpassword = await bcrypt.hash(password, salt);
      const newUser = await new userModel({
        name,
        email,
        password: hashpassword,
      }).save();
      sendEmailOtp(req, newUser);
      res.status(200).json({
        status: "success",
        message: "user created successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "user registration failed",
        status: "failed",
      });
    }
  };
  //useremailverification
  static emailVerification = async (req, res) => {
    try {
      const { email, otp } = req.body;
      if (!email || !otp) {
        return res.status(400).json({
          message: "All fields Required",
          status: "failed",
        });
      }
      //check email already exist
      const existinguser = await userModel.findOne({ email });
      if (!existinguser) {
        return res
          .status(500)
          .json({ status: "failed", message: "Email doesn't exist" });
      }
      //check if there is a matching otp
      const emailOtpCheck = await EmailVerificationModel.findOne({
        userId: existinguser._id,
        otp,
      });
      console.log(emailOtpCheck, existinguser);

      if (!emailOtpCheck) {
        if (!existinguser.is_verified) {
          await sendEmailOtp(req, existinguser);
          console.log("hi");

          return res.status(400).json({
            status: "failed",
            message: "invalid OTP,New OTP send verify",
          });
        }
        return res.status(400).json({
          status: "failed",
          message: "invalid OTP",
        });
      }
      const currentTime = new Date();
      const expiretionTime = new Date(
        emailOtpCheck.createdAt.getTime() + 15 * 60 * 1000
      );
      if (currentTime > expiretionTime) {
        await sendEmailOtp(req, existinguser);
        return res.status(400).json({
          status: "failed",
          message: "invalid OTP,New OTP send verify",
        });
      }
      existinguser.is_verified = true;
      await existinguser.save();
      await EmailVerificationModel.deleteMany({ userId: existinguser._id });
      return res.status(200).json({
        status: "success",
        message: "verification successfull",
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        status: "failed",
        message: "unable to verify",
      });
    }
  };
  //userlogin
  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    //

    if (!email || !password) {
      return res
        .status(500)
        .json({ status: "failed", message: "All fields required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "No user with email exist" });
    }
    if (!user.is_verified) {
      return res
        .status(401)
        .json({ status: "failed", message: "Please verify your email" });
    }
    const matchCheck = await bcrypt.compare(password, user.password);
    if (!matchCheck) {
      return res
        .status(401)
        .json({ status: "failed", message: "email or password invalid" });
    }
    //generate token
    const { accessToken, accessTokenExp, refreshToken, refreshTokenExp } =
      await generateToken(user);
    //setcookies
    setTokencookies(
      res,
      accessToken,
      accessTokenExp,
      refreshToken,
      refreshTokenExp
    );

    //send success responce with token
    return res.status(200).json({
      status: "success",
      message: "Login Successfull!",
      access_token: accessToken,
      access_token_exp: accessTokenExp,
      refresh_token: refreshToken,
      is_auth: true,
    });
  };
  //refreshtoken
  static getNewAccessToken = async (req, res) => {
    try {
      const {
        newaccessToken,
        newaccessTokenExp,
        newrefreshToken,
        newrefreshTokenExp,
      } = await refreshAccessToken(req, res);

      setTokencookies(
        res,
        newaccessToken,
        newaccessTokenExp,
        newrefreshToken,
        newrefreshTokenExp
      );
      return res.status(200).json({
        status: "success",
        message: "new access token!",
        access_token: newaccessToken,
        access_token_exp: newaccessTokenExp,
        refresh_token: newrefreshToken,
        is_auth: true,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "failed to generate access token" });
    }
  };
  //profile or login user
  static userProfile = async (req, res) => {
    return res.send({ user: req.user });
    // return res.status(200).json({ data: { user: req.user }, is_success: true });
  };
  //changepassword
  static changePassword = async (req, res) => {
    try {
      const { password, confirmpassword } = req.body;
      if (!password || !confirmpassword) {
        return res.status(400).json({
          status: "failed",
          message: "password and confirm password required!",
        });
      }
      if (password !== confirmpassword) {
        return res
          .status(400)
          .json({ status: "failed", message: "your password mismatch!" });
      }
      //generrate salt and hash password
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashpassword = await bcrypt.hash(password, salt);
      await userModel.findByIdAndUpdate(req.user._id, {
        $set: { password: hashpassword },
      });
      res.status(200).json({
        status: "success",
        message: "your password reseted suuccessfully!",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "requires password and confirmpassword!",
      });
    }
  };

  //send password reset email
  static sendpasswordResetLink = async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "email requires" });
      }
      const user = await userModel.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: "no user registerd with this mail" });
      }
      //generate token for password reset
      const secret = user._id + process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ userId: user._id }, secret, {
        expiresIn: "15m",
      });
      //resetlink
      const reset_link = `${process.env.FRONT_END_PORT}/reset-password/${user._id}/${token}`;
      await transporter.sendMail({
        from: process.env.FROM_URL,
        to: user.email,
        subject: "ResetPassword Request",
        html: `<p>Dear ${user.name}</p>,<p>please <a href="${reset_link}">Click</a> here to rest your password </p>`,
      });
      res.status(200).json({ message: "send email to your email" });
    } catch (error) {
      res.status(500).json({ message: "failed to send email" });
    }
  };
  //password reset
  static passwordReset = async (req, res) => {
    try {
      const { password, confirmpassword } = req.body;
      const { id, token } = req.params;
      const user = await userModel.findById(id);
      if (!user) {
        return res
          .status(400)
          .json({ message: "no user registerd with this mail" });
      }
      const secret = user._id + process.env.JWT_SECRET_KEY;
      const verfy_token = jwt.verify(token, secret);
      if (!verfy_token) {
        return res
          .status(400)
          .json({ message: "link expired plese resend link!" });
      }
      if (!password || !confirmpassword) {
        return res
          .status(400)
          .json({ message: "password and confirm password required!" });
      }
      if (password !== confirmpassword) {
        return res.status(400).json({ message: "your password mismatch!" });
      }
      //generrate salt and hash password
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashpassword = await bcrypt.hash(password, salt);
      await userModel.findByIdAndUpdate(user._id, {
        $set: { password: hashpassword },
      });
      res.status(200).json({ message: "your password reseted suuccessfully!" });
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(400)
          .json({ message: "link expired plese resend link error!" });
      }
      console.log(error);

      res.status(500).json({ message: "failed to reset" });
    }
  };
  //logout
  static userLogout = async (req, res) => {
    try {
      const refresh_token = req.cookies.refreshToken;

      await userRefreshTokenModel.findOneAndUpdate(
        { token: refresh_token },
        { $set: { blacklisted: true } }
      );
      res.clearCookie("accesstoken");
      res.clearCookie("refreshtoken");
      res.clearCookie("is_auth");
      res.clearCookie("accesstoken");
      res.status(200).json({ message: "logout successfull" });
    } catch (error) {
      res.status(500).json({ message: "unable to logout" });
    }
  };
}
export default userController;
