import { prisma } from "../../utils/prisma.util.js"

class TodosService {
	// 할 일 생성
	async createTodo(name, description) {

		if (!name) {
			throw new Error('이름이 입력되지 않았습니다.');
		}
		if (!description) {
			throw new Error('설명이 입력되지 않았습니다.');
		}

		return await prisma.todo.create({
			data: {
				name: name,
				description: description
			}
		});
	}

	// 할 일 목록 조회
	async findTodos() {
		return await prisma.todo.findMany();
	}

	// 할 일 상세 조회
	async findTodo(todoId) {

		// todo 조회
		const todo = await prisma.todo.findUnique({
			where: {
				id: +todoId
			}
		});

		// todo 없을 경우 예외처리
		if (!todo) {
			throw new Error('존재하지 않는 todo 입니다.');
		}

		return await prisma.todo.findUnique({
			where: {
				id: +todoId
			}
		});
	}
	// 할 일 수정
	async updateTodo(todoId, name, description) {

		// todo 조회
		const todo = await prisma.todo.findUnique({
			where: {
				id: +todoId
			}
		});

		// todo 없을 경우 예외처리
		if (!todo) {
			throw new Error('존재하지 않는 todo 입니다.');
		}

		// 수정할 값이 없을 경우 예외처리
		if (!(name && description)) {
			throw new Error('수정할 내용이 없습니다.');
		}

		return await prisma.todo.update({
			where: {
				id: +todoId
			},
			data: {
				name: name,
				description: description
			}
		});
	}
	// 할 일 삭제
	async deleteTodo(todoId) {
		// todo 조회
		const todo = await prisma.todo.findUnique({
			where: {
				id: +todoId
			}
		});

		// todo 없을 경우 예외처리
		if (!todo) {
			throw new Error('존재하지 않는 todo 입니다.');
		}

		return await prisma.todo.delete({
			where: {
				id: +todoId
			}
		});
	}
}
export { TodosService }