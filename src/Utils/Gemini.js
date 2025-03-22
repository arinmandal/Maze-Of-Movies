import { GoogleGenerativeAI } from '@google/generative-ai'
import { GEMINI_KEY } from './constant';

export const genAI = new GoogleGenerativeAI(GEMINI_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });