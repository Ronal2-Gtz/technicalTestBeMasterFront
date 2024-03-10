import { useSelector } from "react-redux";

import LogoDisney from "../../assets/logo.png";
import { Email } from "./components/Email";
import { Password } from "./components/Password";
import { RootState } from "../../store";

type LoginProps = {};

export const Login = ({}: LoginProps): React.ReactElement => {
  const step = useSelector((state: RootState) => state.steps.step);

  return (
    <div className=" mt-10 flex flex-col gap-7 justify-center items-center">
      <img src={LogoDisney} alt="logo disney" />
      {step === "email" ? <Email /> : <Password />}
    </div>
  );
};
