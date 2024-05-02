import Logo from "../../_components/block/Logo";
import LoginForm from "./_components/LoginForm";
import Link from "next/link";
export default function Login() {
  return (
    <div>
      <LoginForm />
      <div className="text-center mt-5">
        계정이 없으신가요? <Link href={`/signup`}>가입하기</Link>
      </div>
    </div>
  );
}
