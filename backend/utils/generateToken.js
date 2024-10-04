import jwt from "jsonwebtoken";
import userRefreshTokenModel from "../models/userRefreshToken.js";

const generateToken = async (user) => {
  try {
    const payload = { _id: user._id, roles: user.roles };
    //accesstoken
    const accessTokenExp = Math.floor(Date.now() / 1000) + 100;
    const accessToken = jwt.sign(
      { ...payload, exp: accessTokenExp },
      process.env.JWT_SECRET_KEY
      //{expiersIn:'10s'}
      //accesstoken
    );
    const refreshTokenExp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5;
    const refreshToken = jwt.sign(
      { ...payload, exp: refreshTokenExp },
      process.env.JWT_SECRET_KEY
      //{expiersIn:'5d'}
    );
    const userRefreshToken = await userRefreshTokenModel.findOne({
      userId: user._id,
    });
    if (userRefreshToken) await userRefreshToken.deleteOne();
    //to blacklist
    // if (userRefreshToken) {
    //   userRefreshToken.blacklisted = true;
    //   await userRefreshToken.save();
    // }
    await new userRefreshTokenModel({
      userId: user._id,
      token: refreshToken,
    }).save();
    return Promise.resolve({
      accessToken,
      accessTokenExp,
      refreshToken,
      refreshTokenExp,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default generateToken;
