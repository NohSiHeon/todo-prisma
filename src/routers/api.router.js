import express from 'express';
import { authRouter } from './auth.router.js';
import { userRouter } from './users.router.js';
import { todosRouter } from './todos.router.js';


const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/todos', todosRouter);

export { apiRouter };