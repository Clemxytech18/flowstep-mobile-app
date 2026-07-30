import { Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing.jsx";
import Signup from "./screens/Signup.jsx";
import Prompt from "./screens/Prompt.jsx";
import Settings from "./screens/Settings.jsx";
import McpConnect from "./screens/McpConnect.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 flex justify-center">
      <div className="w-full max-w-[420px] bg-zinc-950 shadow-2xl min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/prompt" element={<Prompt />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/mcp" element={<McpConnect />} />
        </Routes>
      </div>
    </div>
  );
}
