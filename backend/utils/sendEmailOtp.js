import transporter from "../config/emailconfig.js";
import EmailVerificationModel from "../models/emialverify.model.js";
const sendEmailOtp = async (req, user) => {
  //create otp
  const otp = Math.floor(1000 + Math.random() * 9000);
  //otp verification link
  await new EmailVerificationModel({
    userId: user._id,
    otp: otp,
  }).save();
  const otpVerfylink = `${process.env.FRONT_END_PORT}/account/verify-email`;
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: "verify your account",
    html: `
    <h1>Dear ${user.name},</h1>
    <p></p>Thank you for registering with us Please verify your email account. 
    Your one time OTP: <strong>${otp}</strong> its valid til 15 min.</p> 
    verify it at <a>${otpVerfylink}</a>
    <p>If you didn't register with us please Ignore</p>
    `,
  });
};

export default sendEmailOtp;
