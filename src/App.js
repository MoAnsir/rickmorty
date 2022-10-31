import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl text-center">Rick & Morty</h1>
    </div>
  );
}

export default App;
