import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Workflow, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";
import { Button } from "../components/ui/button.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const goToPrompt = () => navigate("/prompt");

  return (
    <div className="bg-zinc-950 text-neutral-50 w-full min-h-screen">
      <div className="min-h-screen bg-zinc-950 flex mx-auto flex-col w-full">
        <div className="flex px-8 pt-16 pb-6 flex-col flex-1">
          <div className="flex mb-10 flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="size-9 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] rounded-xl bg-[#7f22fe] flex justify-center items-center">
                <Workflow className="size-5 text-violet-50" />
              </div>
              <span className="font-bold text-neutral-50 text-2xl leading-8 tracking-tight">
                Flowstep
              </span>
            </div>
          </div>

          <div className="flex mb-8 flex-col gap-2">
            <h1 className="font-bold text-neutral-50 text-3xl leading-9">
              Create your account
            </h1>
            <p className="text-[#9f9fa9] text-sm leading-5">
              Start building beautiful flows in seconds. No credit card
              required.
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              goToPrompt();
            }}
          >
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="font-medium text-neutral-50 text-sm leading-5"
              >
                Email
              </Label>
              <div className="relative">
                <Mail className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl bg-zinc-900 text-neutral-50 border-white/10 border-1 border-solid pl-10 h-12"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="password"
                className="font-medium text-neutral-50 text-sm leading-5"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="rounded-xl bg-zinc-900 text-neutral-50 border-white/10 border-1 border-solid px-10 h-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="top-1/2 -translate-y-1/2 text-[#9f9fa9] absolute right-3 bg-transparent border-0 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="font-bold rounded-xl bg-[#7f22fe] text-violet-50 text-base leading-6 mt-2 w-full h-12"
            >
              Sign Up
            </Button>
          </form>

          <div className="flex my-6 items-center gap-4">
            <div className="flex-1" />
            <span className="text-[#9f9fa9] text-xs leading-4">or</span>
            <div className="bg-white/10 flex-1 h-px" />
          </div>

          <Button
            onClick={goToPrompt}
            variant="outline"
            className="font-semibold rounded-xl bg-zinc-900 text-neutral-50 text-base leading-6 border-white/10 border-1 border-solid w-full h-12"
          >
            <svg
              className="size-5"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="flex-1" />
          <p className="text-center text-[#9f9fa9] text-sm leading-5 mt-8">
            Already have an account?{" "}
            <span className="font-semibold text-[#7f22fe] cursor-pointer">
              Log In
            </span>
          </p>
        </div>

        <BottomNav active="home" />
      </div>
    </div>
  );
}
