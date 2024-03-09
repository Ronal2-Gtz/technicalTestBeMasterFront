type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#0058E1] p-3 text-white rounded-full hover:bg-[#0682f0] "
    >
      {label}
    </button>
  );
};
