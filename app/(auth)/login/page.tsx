import LoginForm from "./_components/LoginForm";
import { Link } from "@/app/_components/atom"
export default function Login() {
  return (
    <div>
      <LoginForm />
      <div className="text-center mt-5">
        계정이 없으신가요?{" "}
        <Link href={`/signup`} className="text-cyan-500">
          가입하기
        </Link>
      </div>
    </div>
  );
}
