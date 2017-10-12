import dotenv from 'dotenv'
dotenv.config()

export const PORT = 3000;
export const SECRET = process.env.SECRET
export const REWARD_CUT = 0.1
