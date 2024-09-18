import express from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { AuthService } from '../services/auth.service.js';


const authRouter = express.Router();
const authService = new AuthService();
const authController = new AuthController(authService);

// 회원가입
authRouter.post("/sign-up", authController.signUp);
// 로그인
authRouter.post('/sign-in', authController.signIn);

export { authRouter }