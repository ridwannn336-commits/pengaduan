"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: Props) {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-slate-950
        text-white
      "
    >
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4 text-slate-400">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="
          mt-6
          rounded-2xl
          bg-blue-600
          px-6
          py-3
        "
      >
        Retry
      </button>
    </main>
  );
}