import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NavHeader from "./components/NavHeader";
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Affiliate from "./pages/Affiliate";
import Performance from "./pages/Performance";
import Support from "./pages/Support";


function App() {
  const [count, setCount] = useState(0);
  const token = localStorage.getItem('jwt');

  return (
    <>
      <NavHeader />
      <div className="site-wrapper">
        <Sidebar className="sidebar" />
        <main className="main-content">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Affiliate" element={<Affiliate />} />
            <Route path="/Performance" element={<Performance />} />
            <Route path="/Support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
