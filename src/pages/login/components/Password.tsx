import { ChangeEvent } from "react";

import { Button, Input, ErrorMessage } from "../../../components";

type EditButtonProps = {
  onClick: () => void;
};
type PasswordProps = {
  email: string;
  password: string;
  isError: boolean;
  handleEditEmail: () => void;
  handleLogin: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Password = ({
  email,
  isError,
  onChange,
  handleEditEmail,
  handleLogin,
}: PasswordProps) => {
  return (
    <div className="w-11/12 md:w-6/12 flex flex-col gap-5 bg-white text-black md:px-20 px-10 py-10 md:py-10 rounded-3xl">
      <div>
        <p className="text-sm ">PASO 2</p>
        <h1 className="text-2xl font-semibold">Escribir contraseña</h1>
      </div>
      <p className="text-base font-light">
        Es necesario iniciar sesión en la cuenta con tu correo: 
        <span className="font-semibold">{` ${email}`}</span> <EditEmailButton onClick={handleEditEmail} />.
      </p>
      <div>
        <div>
          <Input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={onChange}
          />
          {isError && (
            <ErrorMessage>Debe ingresar una contraseña.</ErrorMessage>
          )}
        </div>
        <p className="text-[#81848b]  text-[12px]">
          Distingue mayúsculas y minúsculas.
        </p>
      </div>
      <Button onClick={handleLogin} label="Iniciar sesión" />

      <p className="text-[#0040E5] text-sm font-light ">
        ¿Problemas para iniciar sesión? Enviar un código de acceso único
      </p>
    </div>
  );
};

const EditEmailButton = ({ onClick }: EditButtonProps): React.ReactElement => (
  <button
    onClick={onClick}
    className="text-[#4d6dbd] font-light hover:underline"
  >
    (editar)
  </button>
);
