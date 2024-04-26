'use client';
import Logo from "../shared/components/Logo";
import Loader from "../shared/components/Loader";
import LoginForm from "./component/LoginForm";
export default function Login() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        {/* <Loader /> */}
        <Logo href="/" width={200} />
        <div className="w-3/5">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
