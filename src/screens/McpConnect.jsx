import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plug,
  Frame,
  CheckCircle2,
  MessageSquare,
  Mail,
  Link as LinkIcon,
  Plus,
} from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import BottomNav from "../components/BottomNav.jsx";

const initialServers = [
  { key: "figma", name: "Figma", icon: Frame, color: "#fe9a00", connected: true },
  { key: "asana", name: "Asana", icon: CheckCircle2, color: "#ff6467", connected: true },
  { key: "slack", name: "Slack", icon: MessageSquare, color: "#7f22fe", connected: true },
  { key: "gmail", name: "Gmail", icon: Mail, color: "#ff6467", connected: true },
];

export default function McpConnect() {
  const navigate = useNavigate();
  const [servers, setServers] = useState(initialServers);
  const [serverUrl, setServerUrl] = useState("https://mcp.example.com/sse");

  const toggleConnect = (key) => {
    setServers((prev) =>
      prev.map((s) => (s.key === key ? { ...s, connected: !s.connected } : s)),
    );
  };

  return (
    <div className="bg-zinc-950 text-neutral-50 w-full min-h-screen">
      <div className="bg-zinc-950 flex mx-auto flex-col w-full min-h-screen">
        <div className="overflow-y-auto flex-1">
          <div className="flex px-8 pt-8 pb-6 flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => navigate("/settings")}
                  size="icon"
                  className="size-9 rounded-full bg-zinc-800 text-neutral-50"
                >
                  <ArrowLeft className="size-5" />
                </Button>
                <h1 className="font-bold text-2xl leading-8 tracking-tight">
                  Connect Integrations
                </h1>
              </div>
              <p className="text-[#9f9fa9] text-sm leading-5">
                Connect MCP servers to extend Flowstep's capabilities and let
                your workspace talk to the tools you already use.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex px-1 items-center gap-2">
                <Plug className="size-4 text-[#7f22fe]" />
                <span className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                  Available Servers
                </span>
              </div>

              {servers.map(({ key, name, icon: Icon, color, connected }) => (
                <div
                  key={key}
                  className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-zinc-800 flex justify-center items-center">
                      <Icon className="size-5" style={{ color }} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm leading-5">
                        {name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`size-2 rounded-full ${connected ? "bg-[#00bc7d]" : "bg-zinc-600"}`}
                        />
                        <span
                          className={`text-xs leading-4 ${connected ? "text-[#00bc7d]" : "text-[#9f9fa9]"}`}
                        >
                          {connected ? "Connected" : "Not connected"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {connected ? (
                    <Button
                      onClick={() => toggleConnect(key)}
                      variant="outline"
                      className="font-semibold rounded-full text-neutral-50 text-xs leading-4 border-[#7f22fe]/50 border-1 border-solid px-5 h-9"
                    >
                      Manage
                    </Button>
                  ) : (
                    <Button
                      onClick={() => toggleConnect(key)}
                      className="font-semibold rounded-full bg-[#7f22fe] text-violet-50 text-xs leading-4 px-5 h-9"
                    >
                      Connect
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 flex-1 h-px" />
                <span className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                  Custom Integration
                </span>
                <div className="bg-white/10 flex-1 h-px" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[#9f9fa9] text-xs leading-4 px-1">
                  MCP Server URL
                </label>
                <div className="shadow-[0_0_0_3px_oklch(0.541_0.281_293.009/0.15)] rounded-xl bg-zinc-900 border-[#7f22fe]/60 border-1 border-solid flex px-3 items-center gap-2">
                  <LinkIcon className="size-4 shrink-0 text-[#7f22fe]" />
                  <Input
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                    className="bg-transparent text-sm leading-5 border-0 border-solid px-0 h-11"
                  />
                </div>
              </div>
              <Button className="font-bold rounded-xl bg-[#7f22fe] text-violet-50 text-sm leading-5 w-full h-12">
                <Plus className="size-4" />
                Add Custom Server
              </Button>
            </div>
          </div>
        </div>

        <BottomNav active="files" />
      </div>
    </div>
  );
}
