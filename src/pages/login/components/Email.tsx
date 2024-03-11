import { Button, Input } from "../../../components";
import { ChangeEvent } from "react";
import { isValidEmail } from "../../../utils";
import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";

type EmailProps = {
  email: string;
  isError: boolean;
  handleContinue: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Email = ({
  email,
  isError,
  onChange,
  handleContinue,
}: EmailProps): React.ReactElement => {
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
      <div>
        <Input
          onChange={onChange}
          value={email}
          name="email"
          placeholder="Correo electronico"
        />

        {isError && (
          <ErrorMessage>{!email ? "El email es requerido." : ""}</ErrorMessage>
        )}
        {isError && (
          <ErrorMessage>
            {email && !isValidEmail(email)
              ? "Debe ingresar un email valido."
              : ""}
          </ErrorMessage>
        )}
      </div>
      <Button onClick={handleContinue} label="Continuar" />
    </div>
  );
};
