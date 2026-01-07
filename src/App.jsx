import { useState } from "react";
import "./App.css";
import { HeadshotCard } from "./componets/HeadshotCard";

export default function App() {
  return (
    <div className="d-flex align-items-start">
      <div>
        <HeadshotCard />
      </div>
      <h1> hello world </h1>
    </div>
  );
}
