import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// CORREÇÃO: Importando o globals.css onde colocamos o @import "tailwindcss"
import "./styles/globals.css"; 

createRoot(document.getElementById("root")!).render(<App />);
