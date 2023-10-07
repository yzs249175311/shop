import { useState, SyntheticEvent } from "react";
import Button from "@/components/buttons/Button.component";
import { Button as ButtonBase } from "@/App.styles";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../utils/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  function changeHandler(e: any) {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  async function submitHandlerSignIn(e: SyntheticEvent) {
    e.preventDefault();
    try {
      let userRef = await signInAuthWithEmailAndPassword(
        formFields.email,
        formFields.password,
      );
    } catch (err: any) {
      console.log("sign in error:", err.message);
    }
  }

  async function submitHandlerSignInWithGoogle(e: SyntheticEvent) {
    e.preventDefault();
    try {
      let { user } = await signInWithGooglePopup();
    } catch (err: any) {
      console.log("sign in google error: " + err.message);
    }
  }

  return (
    <div className="mx-auto w-3/4 h-fit flex flex-col justify-center items-start p-4 px-20 border shadow-xl mt-4">
      <h2 className="border-b-2 text-xl text-center font-bold self-stretch">
        Sign In with your email and password
      </h2>
      <form className="w-full h-fit flex flex-col justify-center items-stretch gap-4">
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formFields.email}
          required
          onChange={changeHandler}
          placeholder="email"
        />

        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formFields.password}
          required
          onChange={changeHandler}
          placeholder="password"
        />
      </form>
      <div className="flex gap-2">
        <Button
          className="border-2 border-solid border-black py-1 px-2 mt-4"
          onClick={submitHandlerSignIn}
        >
          Sign In
        </Button>
        <Button
          className="border-2 border-solid border-black py-1 px-2 mt-4"
          onClick={submitHandlerSignInWithGoogle}
        >
          Sign In With Google
        </Button>
        <ButtonBase>styled-components</ButtonBase>
      </div>
    </div>
  );
}
