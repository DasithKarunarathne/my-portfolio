import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// OPTIONAL: if you created a ThemeProvider component, keep these 2 lines.
// If you don't have it, delete the import and remove the <ThemeProvider> wrapper.
import ThemeProvider from "./components/ThemeProvider.jsx";

// Inject Google Fonts via <link> (same effect as your TSX snippet)
const googleFontsLink = document.createElement("link");
googleFontsLink.rel = "stylesheet";
googleFontsLink.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap";
document.head.appendChild(googleFontsLink);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Remove ThemeProvider if you didn't create it */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
