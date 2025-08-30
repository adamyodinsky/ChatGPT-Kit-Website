import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppWithLoader from "./components/AppWithLoader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithLoader />
  </StrictMode>
);
