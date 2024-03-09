type inputProps = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: () => void;
};

export const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
}: inputProps): React.ReactElement => {
  return (
    <input
      className="w-full p-5 bg-[#E9EBF0] rounded-sm"
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};
