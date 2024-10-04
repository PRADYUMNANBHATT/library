import userModel from "../models/user.model.js";
import userRefreshTokenModel from "../models/userRefreshToken.js";
import generateToken from "./generateToken.js";
import verifyRefreshToken from "./verifyRefreshToken.js";

const refreshAccessToken = async (req, res) => {
  try {
    const oldRefreshToken = req.cookies.refreshToken;
    //verify refreshtoken
    const { tokenDetails, error } = await verifyRefreshToken(oldRefreshToken);

    if (error) {
      return res.status(401).json({
        staus: "failed",
        Message: "Invalid refresh token",
      });
    }
    const user = await userModel.findById(tokenDetails._id);
    if (!user) {
      return res.status(401).json({
        staus: "failed",
        Message: "unauthorised access user not found",
      });
    }
    const userRefreshToken = await userRefreshTokenModel.findOne({
      userId: tokenDetails._id,
    });

    if (
      oldRefreshToken !== userRefreshToken.token ||
      userRefreshToken.blacklisted
    ) {
      return res.status(401).json({
        staus: "failed",
        Message: "unauthorised access",
      });
    }
    const { accessToken, accessTokenExp, refreshToken, refreshTokenExp } =
      await generateToken(user);

    return {
      newaccessToken: accessToken,
      newaccessTokenExp: accessTokenExp,
      newrefreshToken: refreshToken,
      newrefreshTokenExp: refreshTokenExp,
    };
  } catch (error) {
    return res.status(500).json({
      staus: "failed",
      Message: "failed to generate refreshs token",
    });
  }
};

export default refreshAccessToken;
