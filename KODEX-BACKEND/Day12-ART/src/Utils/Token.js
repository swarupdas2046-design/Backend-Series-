import jwt from "jsonwebtoken";
export const GenerateAccessToken = (UserId) => {
  return jwt.sign({ UserId }, process.env.SECRET_ACCESS_KEY, {
    expiresIn: "15min",
  });
};

export const GenerateRefreshToken = (UserId) => {
  return jwt.sign({ UserId }, process.env.SECRET_REFRESH_KEY, {
    expiresIn: "1d",
  });
};
