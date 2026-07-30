import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Plug,
  ChevronRight,
  User,
  CreditCard,
  Bell,
  Palette,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import { Switch } from "../components/ui/switch.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-50 flex flex-col w-full">
      <div className="flex px-6 pt-12 pb-4 items-center gap-2">
        <button
          onClick={() => navigate("/prompt")}
          className="size-10 rounded-full bg-zinc-900 text-neutral-50 flex justify-center items-center border-0 cursor-pointer"
        >
          <ChevronLeft className="size-5" />
        </button>
        <h1 className="font-bold text-neutral-50 text-2xl leading-8">
          Settings
        </h1>
      </div>

      <div className="overflow-y-auto flex px-6 pt-2 pb-6 flex-col flex-1 gap-6">
        <button
          onClick={() => navigate("/mcp")}
          className="relative bg-[linear-gradient(135deg,oklch(0.541_0.281_293.009),oklch(0.627_0.265_303.9))] shadow-lg shadow-primary/30 text-left rounded-3xl p-6 overflow-hidden border-0 cursor-pointer"
        >
          <div className="size-32 bg-[radial-gradient(circle,oklch(1_0_0/.15),transparent_70%)] rounded-full absolute -right-8 -top-8" />
          <div className="relative flex items-start gap-4">
            <div className="size-12 bg-[oklch(1_0_0/.2)] shrink-0 rounded-2xl flex justify-center items-center">
              <Plug className="size-6 text-violet-50" />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <h2 className="font-bold text-violet-50 text-lg leading-7">
                Connect MCP &amp; Integrations
              </h2>
              <p className="text-violet-50/80 text-sm leading-5">
                Link Asana, Figma, Slack and more to your workspace
              </p>
            </div>
            <ChevronRight className="size-5 shrink-0 text-violet-50/80 mt-1" />
          </div>
        </button>

        <div className="flex flex-col gap-2">
          <span className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wide px-2">
            Account
          </span>
          <div className="rounded-2xl bg-zinc-900 overflow-hidden">
            <button className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-4 items-center gap-4 w-full bg-transparent cursor-pointer">
              <div className="size-9 shrink-0 rounded-xl bg-zinc-800 flex justify-center items-center">
                <User className="size-5 text-[#9f9fa9]" />
              </div>
              <span className="text-left text-neutral-50 text-base leading-6 flex-1">
                Profile
              </span>
              <ChevronRight className="size-5 text-[#9f9fa9]" />
            </button>
            <button className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-4 items-center gap-4 w-full bg-transparent cursor-pointer">
              <div className="size-9 shrink-0 rounded-xl bg-zinc-800 flex justify-center items-center">
                <CreditCard className="size-5 text-[#9f9fa9]" />
              </div>
              <span className="text-left text-neutral-50 text-base leading-6 flex-1">
                Plan &amp; Billing
              </span>
              <ChevronRight className="size-5 text-[#9f9fa9]" />
            </button>
            <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-4 items-center gap-4 w-full">
              <div className="size-9 shrink-0 rounded-xl bg-zinc-800 flex justify-center items-center">
                <Bell className="size-5 text-[#9f9fa9]" />
              </div>
              <span className="text-left text-neutral-50 text-base leading-6 flex-1">
                Notifications
              </span>
              <Switch defaultChecked={true} />
            </div>
            <div className="flex p-4 items-center gap-4 w-full">
              <div className="size-9 shrink-0 rounded-xl bg-zinc-800 flex justify-center items-center">
                <Palette className="size-5 text-[#9f9fa9]" />
              </div>
              <span className="text-left text-neutral-50 text-base leading-6 flex-1">
                Appearance / Theme
              </span>
              <div className="rounded-full bg-zinc-800 flex p-1 items-center gap-1">
                <button className="size-8 rounded-full flex justify-center items-center bg-transparent border-0 cursor-pointer">
                  <Sun className="size-4" />
                </button>
                <button className="size-8 rounded-full flex justify-center items-center bg-transparent border-0 cursor-pointer">
                  <Moon className="size-4" />
                </button>
              </div>
            </div>
            <div className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid" />
            <button
              onClick={() => navigate("/")}
              className="text-[#ff6467] flex p-4 items-center gap-4 w-full bg-transparent border-0 cursor-pointer"
            >
              <div className="size-9 shrink-0 rounded-xl bg-zinc-800 flex justify-center items-center">
                <LogOut className="size-5 text-[#ff6467]" />
              </div>
              <span className="text-left text-[#ff6467] text-base leading-6 flex-1">
                Log Out
              </span>
              <ChevronRight className="size-5 text-[#ff6467]/80" />
            </button>
          </div>
        </div>
      </div>

      <BottomNav active="account" />
    </div>
  );
}
