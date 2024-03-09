import { useDispatch } from "react-redux";

import { goToEmail } from "../../../store/slices/steps/stepsSlice";

import { Button, Input } from "../../../components";

type EditButtonProps = {
  onClick: () => void;
};
type PasswordProps = {};

const EditEmailButton = ({ onClick }: EditButtonProps): React.ReactElement => (
  <button
    onClick={onClick}
    className="text-[#4d6dbd] font-light hover:underline"
  >
    (editar)
  </button>
);

export const Password = ({}: PasswordProps) => {
  const dispatch = useDispatch();
  const email = "Carrilloricki2211@gmail.com";

  const handleEditEmail = (): void => {
    dispatch(goToEmail());
  };

  return (
    <div className="w-6/12 flex flex-col gap-5 bg-white text-black px-20 py-10 rounded-3xl">
      <div>
        <p className="text-sm ">PASO 2</p>
        <h1 className="text-2xl font-semibold">Escribir contraseña</h1>
      </div>
      <p className="text-base font-light">
        Es necesario iniciar sesión en la cuenta con tu correo:
        {email} <EditEmailButton onClick={handleEditEmail} />.
      </p>
      <div>
        <Input type="password" placeholder="Correo electronico" />
        <p className="text-[#81848b]  text-[12px]">
          Distingue mayúsculas y minúsculas.
        </p>
      </div>
      <Button label="Iniciar sesión" />

      <p className="text-[#0040E5] text-sm font-light ">
        ¿Problemas para iniciar sesión? Enviar un código de acceso único
      </p>
    </div>
  );
};
