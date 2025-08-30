import { useEffect } from "react";
import App from "../App";

function AppWithLoader() {
  useEffect(() => {
    // Ensure fonts and styles are loaded before showing content
    const timer = setTimeout(() => {
      const root = document.getElementById("root");
      if (root) {
        root.classList.add("loaded");
      }
    }, 100); // Small delay to ensure CSS is applied

    return () => clearTimeout(timer);
  }, []);

  return <App />;
}

export default AppWithLoader;
