import { useState, SyntheticEvent } from "react";
import styles from "./Navigation.module.scss";
import Button from "./buttons/Button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  function changeHandler(e: any) {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  async function submitHandler(e: SyntheticEvent) {
    e.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      alert("Password must be same!");
      return;
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password,
      );

      if (!res) {
        return;
      }

      await createUserDocumentFromAuth(res!.user, {
        displayName: formFields.name,
      });

    } catch (err: any) {
      console.log("error create user with email and password", err.message);
    } finally {
      setFormFields(defaultFormFields);
    }
  }

  return (
    <div className="mx-auto w-fit h-fit flex flex-col justify-center items-start p-4 border shadow-xl mt-4">
      <h2 className="border-b-2 text-xl font-bold">
        Sign up with your email and password
      </h2>
      <form
        className={`${styles.form} w-fit h-fit flex flex-col justify-center items-start gap-2`}
      >
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={formFields.name}
          required
          onChange={changeHandler}
          placeholder="name"
        />

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

        <label>Confirm Password:</label>
        <input
          name="confirmPassword"
          type="password"
          value={formFields.confirmPassword}
          required
          onChange={changeHandler}
          placeholder="confirmPassword"
        />
      </form>
      <Button
        className="border-2 border-solid border-black py-1 px-2 mt-4"
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </div>
  );
}
