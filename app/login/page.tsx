import Logo from "../_shared/components/Logo";
import LoginForm from "./_components/LoginForm";
import Link from "next/link";
export default function Login() {
  return (
    <main>
      <div className="flex flex-col gap-10 items-center px-6 h-full pt-24">
        <Logo href="/" width={250} />
        <div className="w-full max-w-[500px] min-w-[350px]">
          <LoginForm />
        </div>
        <div>
          계정이 없으신가요? <Link href={`/signup`}>가입하기</Link>
        </div>
        {/* <p className="text-gray-400">© 2024. All rights reserved.</p> */}
      </div>
    </main>
  );
}
