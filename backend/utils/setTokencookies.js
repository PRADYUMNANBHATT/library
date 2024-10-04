const setTokencookies = (
  res,
  accessToken,
  accessTokenExp,
  refreshToken,
  refreshTokenExp
) => {
  const maxaccessTokenExp =
    (accessTokenExp - Math.floor(Date.now() / 1000)) * 1000;
  const maxrefreshTokenExp =
    (refreshTokenExp - Math.floor(Date.now() / 1000)) * 1000;
  //send accesstken cookie
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true, ///if using https
    maxAge: maxaccessTokenExp,
    // sameSite: "strict", //Strict setting for same site
  });
  //send trefreshtoken cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true, ///if using https
    maxAge: maxrefreshTokenExp,
    // sameSite: "strict", //Strict setting for same site
  });
  //send trefreshtoken cookie
  res.cookie("is_auth", true, {
    httpOnly: false,
    secure: false, ///if using https
    maxAge: maxrefreshTokenExp,
    // sameSite: "strict", //Strict setting for same site
  });
};

export default setTokencookies;
