import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LogoDisney from "../../assets/logo.png";
import { Email } from "./components/Email";
import { Password } from "./components/Password";
import { RootState } from "../../store";
import { useForm } from "../../hooks/useForm";
import { isValidEmail } from "../../utils";
import { goToEmail, goToPassword } from "../../store/slices/steps/stepsSlice";

type User = {
  email: string;
  password: string;
};

type LoginProps = {};

export const Login = ({}: LoginProps): React.ReactElement => {
  const dispatch = useDispatch()
  const step = useSelector((state: RootState) => state.steps.step);
  const [errors, setErrors] = useState({
    isErrorEmail: false,
    isErrorPassword: false,
  });

  const { email, password, handleChange } = useForm<User>({
    email: "",
    password: "",
  });

  const handleContinue = (): void => {
    if (!email || !isValidEmail(email)) {
      return setErrors((prev) => ({ ...prev, isErrorEmail: true }));
    }
    dispatch(goToPassword());
  };

  const handleEditEmail = (): void => {
    dispatch(goToEmail());
  };

  const handleLogin = (): void => {
    if (!password) {
      return setErrors((prev) => ({ ...prev, isErrorPassword: true }));
    }
    console.log({ email, password });
  };

  const loginStep = {
    email: (
      <Email
        email={email}
        handleContinue={handleContinue}
        onChange={handleChange}
        isError={errors.isErrorEmail}
      />
    ),
    password: (
      <Password
        handleEditEmail={handleEditEmail}
        password={password}
        isError={errors.isErrorPassword}
        handleLogin={handleLogin}
        email={email}
        onChange={handleChange}
      />
    ),
  };

  return (
    <div className=" mt-10 flex flex-col gap-7 justify-center items-center">
      <img src={LogoDisney} alt="logo disney" />
      {loginStep[step]}
    </div>
  );
};
