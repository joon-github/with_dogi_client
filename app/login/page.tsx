import Logo from "../shared/components/Logo";
import LoginForm from "./component/LoginForm";
export default function Login() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <Logo href="/" width={200} />
        <div className="w-3/5">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
