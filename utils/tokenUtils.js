import jwt from 'jsonwebtoken';

// Create and verify tokens using jsonwebtoken and environment variables
export const createToken = (payload) => {
  console.log('environment variables inside tokenUtils:', process.env);
  console.log(process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
