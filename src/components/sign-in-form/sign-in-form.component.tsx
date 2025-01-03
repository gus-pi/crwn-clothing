import { useState } from 'react';
import FormInput from '../form-input/form-input.components';

import './sign-in-form.styles.scss';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        // const { user } = response;
        resetFormFields();
      } else {
        alert('Authentication failed.');
      }
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-credential':
          alert('Wrong credentials');
          break;
        case 'auth/user-not-found':
          alert('User does not exist');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button buttonType={BUTTON_TYPES_CLASSES.base} type="submit">
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPES_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
