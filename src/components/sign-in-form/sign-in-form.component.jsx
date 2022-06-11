import { logGoogleUser } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import { signInWithAuthEmailAndPassword } from "../../utils/firebase/firebase.utils";
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password || !email) {
      alert("Missing email or password");
      return;
    }

    try {
      const response = await signInWithAuthEmailAndPassword(email, password);
      console.log(response);
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
            buttonType="google"
            children="Sign In With Google"
            onClick={logGoogleUser}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
