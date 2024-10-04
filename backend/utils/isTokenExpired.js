import jwt from "jsonwebtoken";

const isTokenExpired = (token) => {
  if (!token) return true;
  const decodedtoken = jwt.decode(token);
  const currenttime = Date.now() / 1000;
  return decodedtoken.exp < currenttime;
};

export default isTokenExpired;
