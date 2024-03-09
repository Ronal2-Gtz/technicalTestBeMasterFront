import { Button, Input } from "../../../components";

type PasswordProps = {};

export const Password = ({}: PasswordProps) => {
  const email = "Carrilloricki2211@gmail.com";

  return (
    <div className="w-6/12 flex flex-col gap-5 bg-white text-black px-20 py-10 rounded-3xl">
      <div>
        <p className="text-sm ">PASO 2</p>
        <h1 className="text-2xl font-semibold">Escribir contraseña</h1>
      </div>
      <p className="text-base font-light">
        Es necesario iniciar sesión en la cuenta con tu correo:
        {email}.
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
