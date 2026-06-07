import { LoginForm } from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-slate-950
        px-4
      "
    >
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      <div className="relative z-10 w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}