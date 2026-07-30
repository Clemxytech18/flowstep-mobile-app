# Flowstep Mobile

A React + Tailwind CSS implementation of the "Flowstep Mobile" screen designs
(Landing, Signup, Prompt/Home, Settings, and MCP Connection), wired together
with `react-router-dom` for real navigation between screens.

## Screens

| Route        | Screen                                     |
| ------------ | ------------------------------------------- |
| `/`          | Landing (hero + CTAs)                       |
| `/signup`    | Signup (email/password + Google sign-in)    |
| `/prompt`    | Prompt / Home (chat input + action menu)    |
| `/settings`  | Settings (account list + Log Out)           |
| `/mcp`       | MCP / integrations connection screen        |

Navigation wired in:
- Landing → "Try Flowstep Free" → Signup, "See Examples" → Prompt
- Signup → "Sign Up" / "Continue with Google" → Prompt
- Prompt → "Settings" tile (and avatar) → Settings
- Settings → "Connect MCP & Integrations" card → MCP screen, "Log Out" → Landing
- MCP screen → back arrow → Settings
- Bottom tab bar → Home / Design / Files / Account routes on every screen

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that automatically builds and deploys the site to GitHub Pages on every push
to `main` — no manual build/deploy commands needed.

1. Push this project to a new GitHub repository.
2. In `vite.config.js`, set `base` to **exactly match your repo name**
   (this is the #1 cause of a blank page on GitHub Pages — a mismatch means
   the built JS/CSS files 404):
   ```js
   base: "/your-repo-name/",
   ```
   (If you're deploying to a user/org page at `https://<user>.github.io/`,
   set `base: "/"` instead.)
3. In your GitHub repo, go to **Settings → Pages → Build and deployment →
   Source**, and set it to **GitHub Actions** (not "Deploy from a branch").
4. Push to `main` (or run the workflow manually from the **Actions** tab →
   "Deploy to GitHub Pages" → **Run workflow**).
5. Watch the **Actions** tab for the workflow run — once it's green, your
   app is live at `https://<user>.github.io/<repo-name>/`.

From then on, every push to `main` automatically rebuilds and redeploys —
you never need to run a build or deploy command by hand.

Routing uses `HashRouter` (URLs like `.../#/settings`) rather than
`BrowserRouter`, since GitHub Pages has no server-side rewrite rules —
`HashRouter` means deep links and page refreshes always work without a
404, with no extra configuration needed.

**If you still see a blank page:** open DevTools → Console/Network on the
published URL.
- A 404 for `/src/main.jsx` means GitHub Pages is serving your raw source
  instead of the built `dist/` output — double check Pages → Source is set
  to **GitHub Actions**, and check the Actions tab for a failed/missing run.
- 404s for `/assets/*.js` or `/assets/*.css` mean `base` in
  `vite.config.js` doesn't match the repo name — fix it, commit, and push
  again.

## Tech stack

- [Vite](https://vitejs.dev/) + React 18
- [Tailwind CSS](https://tailwindcss.com/)
- [react-router-dom](https://reactrouter.com/) for client-side routing
- [lucide-react](https://lucide.dev/) for icons
- Minimal local `components/ui` primitives (Button, Input, Label, Badge,
  Switch) styled to match the original shadcn/ui-based designs, so there's
  no external UI dependency to configure.
