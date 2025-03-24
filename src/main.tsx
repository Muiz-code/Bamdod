import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure the extension is .tsx for TypeScript
import "./App.css";
import "./index.css";
// import "./MediaQuery.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found in HTML.");
}
