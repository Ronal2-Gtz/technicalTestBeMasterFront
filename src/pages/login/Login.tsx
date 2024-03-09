import LogoDisney from "../../assets/logo.png";
import { Email } from "./components/Email";
import { Password } from "./components/Password";

type LoginProps = {};

export const Login = ({}: LoginProps): React.ReactElement => {
  return (
    <div className=" mt-10 flex flex-col gap-7 justify-center items-center">
      <img src={LogoDisney} alt="logo disney" />
      {true ? <Email /> : <Password />}
    </div>
  );
};
