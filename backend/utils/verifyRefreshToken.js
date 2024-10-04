import userRefreshTokenModel from "../models/userRefreshToken.js";
import jwt from "jsonwebtoken";
const verifyRefreshToken = async (refreshToken) => {
  try {
    const secretkey = process.env.JWT_SECRET_KEY;
    const userRefreshToken = await userRefreshTokenModel.findOne({
      token: refreshToken,
    });
    if (!userRefreshToken) {
      throw { error: true, message: "refreshtoken Invalid" };
    }
    const tokenDetails = jwt.verify(refreshToken, secretkey);
    return { tokenDetails, error: false, message: "valid refresh token" };
  } catch (error) {}
  throw { error: true, message: "refreshtoken Invalid" };
};

export default verifyRefreshToken;
