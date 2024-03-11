type ErrorMessageProps = {
  children: React.ReactElement | string;
};

export const ErrorMessage = ({
  children,
}: ErrorMessageProps): React.ReactElement => {
  return <span className="text-xs text-red-600">{children}</span>;
};
