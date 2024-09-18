
class AuthController {
	constructor(authService) {
		this.authService = authService;
	}

	// 회원가입 컨트롤러
	signUp = async (req, res) => {
		try {
			const { email, password, passwordConfirm, name } = req.body;

			const data = await this.authService.signUp(email, password, passwordConfirm, name);

			return res.status(201).json({
				status: 201,
				message: '회원가입에 성공했습니다.',
				data: data
			});
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	// 로그인 컨트롤러
	signIn = async (req, res) => {
		try {
			const { email, password } = req.body;
			const data = await this.authService.signIn(email, password);

			return res.status(201).json({
				status: 201,
				message: '로그인에 성공했습니다.',
				data: data
			});
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}


}

export { AuthController };