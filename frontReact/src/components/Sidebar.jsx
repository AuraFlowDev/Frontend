import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css"

function Sidebar({className}) {
  return (
      <div className={`sidebar ${className || ""}`}>
        <div className="sidebar-links">
            <Link to="/Dashboard" className="side-link">DASHBOARD</Link>
            <Link to="/Transactions" className="side-link">TRANSACTIONS</Link>
            <Link to="/Profile" className="side-link">PROFILE</Link>
            <Link to="/Settings" className="side-link">SETTINGS</Link>
            <Link to="/Affiliate" className="side-link">TELL A FRIEND</Link>
            <Link to="/Performance" className="side-link">PERFORMANCE</Link>
            <Link to="/Support" className="side-link">SUPPORT & FAQ</Link>
        </div>
        <div className="sidebar-footer"></div>
      </div>
  );
}

export default Sidebar;