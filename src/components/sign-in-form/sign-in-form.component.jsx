import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  SignInFormContainer,
  Header,
  ButtonsContainer,
} from "./sign-in-form.styles.jsx";

import {
  signInWithAuthEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [wrongUser, setWrongUser] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);

  const { email, password } = formFields;

  const handleChange = (event) => {
    if (wrongUser) setWrongUser(false);
    if (wrongPass) setWrongPass(false);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleWrongUser = () => {
    setWrongUser(true);
  };

  const handleWrongPass = () => {
    setWrongPass(true);
  };

  //TODO: fix google sign in

  // const signInWithGoogle = async () => {
  //   await signInWithGooglePopup();
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password || !email) {
      alert("Missing email or password");
      return;
    }

    try {
      const { user } = await signInWithAuthEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          handleWrongPass();
          break;
        case "auth/user-not-found":
          handleWrongUser();
          break;
        default:
          alert(error.code);
      }
    }
  };

  return (
    <SignInFormContainer>
      <Header>I already have an account</Header>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          wrongUser={wrongUser}
          label={wrongUser ? "Email does not exist" : "Email"}
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          wrongPass={wrongPass}
          label={wrongPass ? "Wrong Password" : "Password"}
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button children="Sign In" type="submit"></Button>
          {/*<Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            children="Sign In With Google"
            onClick={signInWithGoogle}
          ></Button>*/}
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
