import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
// set `base` to "/<repo>/". For a custom domain or user/org page
// (https://<user>.github.io/), leave it as "/".
export default defineConfig({
  plugins: [react()],
  base: "/flowstep-mobile-app/",
});
