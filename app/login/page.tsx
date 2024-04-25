import Logo from "../shared/components/Logo";
import LoginForm from "./component/LoginForm";
export default function Login() {
  return (
    <main>
      <Logo href="/" width={200} />
      <LoginForm />
    </main>
  );
}
