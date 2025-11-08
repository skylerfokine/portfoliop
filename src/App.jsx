import { useState } from "react";
import reactLogo from "./assets/react.svg";
import headshot from "./assets/WIN_20251108_11_31_37_Pro.jpg";
import resume from "./assets/skresume Fall2025.pdf";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img
          src={headshot}
          className="logo react animate-bounce"
          alt="React logo"
        />
      </a>
      <h1> My name: Skyler Fokine </h1>
      <h2> Home town: Rockford ohio </h2>
      <p className="description">Bio about me fr.</p>
      <div>
        <a href="https://github.com/skylerfokine" target="_blank">
          {" "}
          My github{" "}
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/skyler-fokine/" target="_blank">
          {" "}
          My linkedin
        </a>
      </div>
      <div>
        <a href="mailto:" target="_blank">
          {" "}
          skylerfokine
        </a>
      </div>
      <div>
        <a href={resume} download>
          DOWNLOAD MY RESUME I NEED A JOB
        </a>
      </div>
    </>
  );
}

export default App;
