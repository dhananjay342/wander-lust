import jwt from "jsonwebtoken";
export const generateaccessToken = async(
    data, expiresIn = process.env.JWT_EXPIRES_IN
) => {
    const token = await jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn });
    return token;
}

export const verifyAccessToken = async (token) => {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded.userID;
}
