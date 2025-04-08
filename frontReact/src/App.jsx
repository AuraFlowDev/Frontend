import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);
  const token = localStorage.getItem('jwt');

  return (
    <>
      <Sidebar className="sidebar" />
      <main className="main-content">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
