import { ChangeEvent } from "react";

type inputProps = {
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: inputProps): React.ReactElement => {
  return (
    <input
      className="w-full p-5 bg-[#E9EBF0] rounded-sm"
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};
