import SignUpForm from "../components/SignUpForm.component";
import SignInForm from "../components/SignInForm.component";

export default function Auth() {

  return (
    <main className="grid grid-cols-2 place-items-center mt-20">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </main>
  );
}
