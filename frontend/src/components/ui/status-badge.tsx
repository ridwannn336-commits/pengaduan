type Props = {
  status:
    | "PENDING"
    | "PROCESS"
    | "COMPLETED"
    | "REJECTED";
};

export const StatusBadge = ({
  status,
}: Props) => {
  const statusStyles = {
    PENDING:
      "bg-yellow-500/20 text-yellow-400",

    PROCESS:
      "bg-blue-500/20 text-blue-400",

    COMPLETED:
      "bg-green-500/20 text-green-400",

    REJECTED:
      "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${statusStyles[status]}
      `}
    >
      {status}
    </span>
  );
};