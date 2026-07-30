import { useNavigate } from "react-router-dom";
import { Home, Wand2, FileText, User } from "lucide-react";

const items = [
  { key: "home", label: "Home", icon: Home, to: "/" },
  { key: "design", label: "Design", icon: Wand2, to: "/prompt" },
  { key: "files", label: "Files", icon: FileText, to: "/mcp" },
  { key: "account", label: "Account", icon: User, to: "/settings" },
];

export default function BottomNav({ active = "home" }) {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex px-4 py-3 flex-row justify-around items-center">
      {items.map(({ key, label, icon: Icon, to }) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => navigate(to)}
            className={`flex flex-col items-center gap-1 bg-transparent border-0 cursor-pointer ${
              isActive ? "text-[#7f22fe]" : "text-[#9f9fa9]"
            }`}
          >
            <Icon className="size-5" />
            <span
              className={`text-[10px] ${isActive ? "font-semibold" : "font-medium"}`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
