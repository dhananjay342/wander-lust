import { verifyAccessToken } from "../config/jwt.js";
const publicRoutes = [ "/auth/register", "/auth/login" ];
export const authMiddleware = (req, res, next) => {
  if (publicRoutes.includes(req.path)) {
     next();
  }
  const [type,token] = req.headers.authorization.split(" ")

  if ( !token || type !== "Beaer") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const userID = verifyAccessToken(token);
  req.user = userID;
  next();
}