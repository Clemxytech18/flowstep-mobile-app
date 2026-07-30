import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowUp,
  Plus,
  FolderInput,
  Pencil,
  Maximize2,
  RefreshCw,
  LayoutTemplate,
  FolderOpen,
  Settings,
} from "lucide-react";
import BottomNav from "../components/BottomNav.jsx";

const menuItems = [
  { icon: Plus, label: "New Design", to: null },
  { icon: FolderInput, label: "Import Figma", to: null },
  { icon: Pencil, label: "Edit Design", to: null },
  { icon: Maximize2, label: "Expand Design", to: null },
  { icon: RefreshCw, label: "Regenerate", to: null },
  { icon: LayoutTemplate, label: "Templates", to: null },
  { icon: FolderOpen, label: "My Files", to: null },
  { icon: Settings, label: "Settings", to: "/settings" },
];

export default function Prompt() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-50 flex flex-col w-full">
      <div className="flex p-8 flex-col flex-1 gap-8 overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="size-8 shadow-[0_0_18px_rgba(127,34,254,0.35)] rounded-lg bg-[#7f22fe] flex justify-center items-center">
              <Sparkles className="size-5 text-violet-50" />
            </div>
            <span className="font-bold text-neutral-50 text-lg leading-7 tracking-tight">
              Flowstep
            </span>
          </div>
          <button
            onClick={() => navigate("/settings")}
            className="size-10 ring-2 ring-primary/40 rounded-full overflow-hidden bg-transparent border-0 p-0 cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGF2YXRhcnxlbnwxfDJ8fHwxNzg1MzM4ODIwfDA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Profile avatar"
              className="object-cover w-full h-full"
            />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-neutral-50 text-3xl leading-9 tracking-tight">
            What do you want to design today?
          </h1>
          <p className="text-[#9f9fa9] text-sm leading-5">
            Describe an idea and Flowstep turns it into a real screen in
            seconds.
          </p>
        </div>

        <div className="shadow-[0_0_0_1px_rgba(127,34,254,0.08),0_12px_30px_rgba(0,0,0,0.35)] rounded-3xl bg-zinc-900 border-[#7f22fe]/40 border-1 border-solid p-4">
          <div className="flex items-end gap-2">
            <textarea
              placeholder="Describe your app or screen..."
              className="resize-none bg-transparent outline-none text-neutral-50 text-sm leading-5 flex-1 h-20"
              defaultValue=""
            />
            <button className="size-11 shrink-0 shadow-[0_10px_24px_rgba(127,34,254,0.35)] rounded-2xl bg-[#7f22fe] text-violet-50 flex justify-center items-center border-0 cursor-pointer">
              <ArrowUp className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {menuItems.map(({ icon: Icon, label, to }) => (
            <button
              key={label}
              onClick={to ? () => navigate(to) : undefined}
              className={`text-left shadow-sm rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 flex-col gap-2 ${
                to ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="size-10 rounded-xl bg-[#7f22fe]/15 flex justify-center items-center">
                <Icon className="size-5 text-[#7f22fe]" />
              </div>
              <span className="font-medium text-neutral-50 text-sm leading-5">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <BottomNav active="design" />
    </div>
  );
}
