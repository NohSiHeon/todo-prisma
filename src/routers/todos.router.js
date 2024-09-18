import express from 'express';
import { TodosController } from '../controllers/todos.controller.js';

const todosRouter = express.Router();
const todosController = new TodosController();

todosRouter.post('/', todosController.createTodo);
todosRouter.get('/', todosController.findTodos);
todosRouter.get('/:id', todosController.findTodo);
todosRouter.patch('/:id', todosController.updateTodo);
todosRouter.delete('/:id', todosController.deleteTodo);


export { todosRouter }