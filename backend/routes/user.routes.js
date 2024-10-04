import express from "express";
const router = express.Router();
import userController from "../controlers/user.controler.js";
import passport from "passport";
import accessTokenAutorefresh from "../middlewate/accessTokenAutorefresh.js";

router.post("/register", userController.userRegistration);
router.post("/verifyemail", userController.emailVerification);
router.post("/userlogin", userController.userLogin);
router.post("/get-refreshtoken", userController.getNewAccessToken);
router.post("/reset-password-link", userController.sendpasswordResetLink);
router.post("/reset-password/:id/:token", userController.passwordReset);
//protuctedroots
router.get(
  "/my-profile",
  accessTokenAutorefresh,
  passport.authenticate("jwt", { session: false }),
  userController.userProfile
);
router.post(
  "/logout",
  accessTokenAutorefresh,
  passport.authenticate("jwt", { session: false }),
  userController.userLogout
);
router.post(
  "/change-password",
  accessTokenAutorefresh,
  passport.authenticate("jwt", { session: false }),
  userController.changePassword
);
export default router;
