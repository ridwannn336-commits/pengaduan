type Props = {
  title: string;
};

export const EmptyState = ({
  title,
}: Props) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-20
      "
    >
      <h2 className="text-xl text-slate-400">
        {title}
      </h2>
    </div>
  );
};