import { useDispatch } from "react-redux";

import { goToPassword } from "../../../store/slices/steps/stepsSlice";

import { Button, Input } from "../../../components";

type EmailProps = {};

export const Email = ({}: EmailProps): React.ReactElement => {
  const dispatch = useDispatch();

  const handleContinue = (): void => {
    dispatch(goToPassword());
  };

  return (
    <div className="w-6/12 flex flex-col gap-5 bg-white text-black px-20 py-10 rounded-3xl">
      <div>
        <p className="text-sm ">PASO 1</p>
        <h1 className="text-2xl font-semibold">
          Escribir correo para continuar
        </h1>
      </div>
      <p className="text-base font-light">
        Es necesario iniciar sesión en tu cuenta. En caso de no tener una,
        recibirás indicaciones para crearla.
      </p>
      <Input placeholder="Correo electronico" />
      <Button onClick={handleContinue} label="Continuar" />
    </div>
  );
};
