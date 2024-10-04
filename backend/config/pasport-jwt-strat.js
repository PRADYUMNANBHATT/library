import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import userModel from "../models/user.model.js";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();
var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.JWT_SECRET_KEY;
// opts.issuer = "accounts.examplesoft.com";
// opts.audience = "yoursite.net";
passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const user = await userModel
        .findOne({ _id: jwt_payload._id })
        .select("-password");
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);
