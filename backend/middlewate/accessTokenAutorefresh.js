import refreshAccessToken from "../utils/refreshAccessToken.js";
import setTokencookies from "../utils/setTokencookies.js";
import isTokenExpired from "../utils/isTokenExpired.js";

const accessTokenAutorefresh = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
 
    if (accessToken || !isTokenExpired(accessToken)) {
      // const refreshToken = req.cookies.refreshToken;
      req.headers["authorization"] = `Bearer ${accessToken}`;
    }
    if (!accessToken || isTokenExpired(accessToken)) {
      const refreshToken = req.cookies.refreshToken;
   
      if (!refreshToken) {
        throw new Error("refreshtokken missing");
      }
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
      req.headers["Authorization"] = `Bearer ${newaccessToken}`;
    }
    next();
  } catch (error) {
    console.error("auto access token failed");
    return res.status(401).json({ message: "auto access tokenfailed", error });
  }
};

export default accessTokenAutorefresh;
