import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useState } from "react";
import {
  signInWithAuthEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password || !email) {
      alert("Missing email or password");
      return;
    }

    try {
      const { user } = await signInWithAuthEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          alert(error);
      }
    }
  };

  return (
    <div className="sign-in-form-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button children="Sign In" type="submit"></Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            children="Sign In With Google"
            onClick={signInWithGoogle}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
