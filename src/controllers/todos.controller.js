import { TodosService } from "../services/todos.service.js"

class TodosController {
	constructor() {
		this.todosService = new TodosService();
	}
	// 할 일 생성
	createTodo = async (req, res) => {
		try {
			const { name, description } = req.body;
			const data = await this.todosService.createTodo(name, description);

			return res.status(201).json({
				status: 201,
				message: '할 일 생성에 성공했습니다.',
				data: data
			});
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	// 할 일 목록 조회
	findTodos = async (req, res) => {
		try {
			const data = await this.todosService.findTodos();

			return res.status(200).json({
				status: 200,
				message: '할 일 목록 조회에 성공했습니다.',
				data: data
			});
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
	// 할 일 조회
	findTodo = async (req, res) => {
		try {
			const { id } = req.params;
			const data = await this.todosService.findTodo(id);

			return res.status(200).json({
				status: 200,
				message: '할 일 조회에 성공했습니다.',
				data: data
			});
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
	// 할 일 수정
	updateTodo = async (req, res) => {
		try {
			const { id } = req.params;
			const { name, description } = req.body;
			const data = await this.todosService.updateTodo(id, name, description);

			return res.status(200).json({
				status: 200,
				message: '할 일 수정에 성공했습니다.',
				data: data
			});
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
	// 할 일 삭제
	deleteTodo = async (req, res) => {
		try {
			const { id } = req.params;
			const data = await this.todosService.deleteTodo(id);

			return res.status(200).json({
				status: 200,
				message: '할 일 삭제에 성공했습니다.',
				data: data
			});
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
}

export { TodosController }