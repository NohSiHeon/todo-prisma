import { prisma } from "../../utils/prisma.util.js";
import bcrypt from "bcrypt";
class AuthService {
	// 회원가입
	async signUp(email, password, passwordConfirm, name) {
		// 이메일 조회
		const existedEmail = await prisma.user.findUnique({
			where: {
				email: email
			}
		});
		console.log(existedEmail);
		// 중복 이메일 확인
		if (existedEmail) {
			throw new Error('중복되어 사용할 수 없는 이메일입니다.');
		}
		// 패스워드와 패스워드 확인이 일치하는지 확인
		if (password !== passwordConfirm) {
			throw new Error('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
		}
		// 패스워드 암호화
		const saltRounds = process.env.SALT_ROUNDS;
		const hashedPassword = await bcrypt.hashSync(password, +saltRounds);

		const user = await prisma.user.create({
			data: {
				email: email,
				password: hashedPassword,
				name: name
			}
		});
		user.password = undefined;
		// DB 적용
		return user;
	}


	// 로그인
	async signIn(email, password) {
		// 유저 조회
		const user = prisma.user.findUnique({
			where: {
				email
			}
		});
		// 패스워드 확인

		return true;
	}
}
export { AuthService }