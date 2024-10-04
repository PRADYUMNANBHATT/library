import isTokenExpired from "../utils/isTokenExpired,js";

const setAuthHeaser = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (accessToken || !isTokenExpired(accessToken)) {
      // const refreshToken = req.cookies.refreshToken;
      req.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    next();
  } catch (error) {
    console.error("faild to set header", error);
  }
};

export default setAuthHeaser;
