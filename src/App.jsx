import { useState } from "react";
import "./App.css";
import Home from "../pages/Home";

const initialPoll = [
  { id: 1, title: "fjkfk", description: "brhfjrh" },
  { id: 2, title: "fjkfj", description: "brhfjrh" },
  { id: 3, title: "fjkfl", description: "brhfjrh" },
  { id: 4, title: "fjkfh", description: "brhfjrh" },
  { id: 5, title: "fjkfw", description: "brhfjrh" },
  { id: 6, title: "fjkfq", description: "brhfjrh" },
  { id: 7, title: "fjkfo", description: "brhfjrh" },
];

export default function App() {
  return (
    <div>
      <Home pollList={initialPoll}></Home>
    </div>
  );
}
