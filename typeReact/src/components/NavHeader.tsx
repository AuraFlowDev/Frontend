import "../css/NavHeader.css"
import LoginForm from "./LoginForm";
import { useState } from "react";

function NavHeader() {

    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        () => Boolean(localStorage.getItem("jwt"))
    );

    return (
        <>
            <header className="headerClass">
                <div className="logo">AF</div>
                <div className="nav-container">
                    <ul className="nav-list">
                        <li><a href="Auraflow_Home.html">How It Works</a></li>
                        <li><a href="tokenomics.html">TOKENOMICS</a></li>
                        <li><a href="#fund">FUND</a></li>
                        <li><a href="news.html">NEWS</a></li>
                    </ul>
                    <button type="button" className={`open-popup ${isLoggedIn ? "logged-in" : ""}`}  onClick={() => {
                        console.log('NavHeader: Klick registriert');
                        setShowLogin(true)
                    }}>
                        <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="7" r="4"></circle>
                            <path d="M5.5 20c1.4-2.33 3.73-4 6.5-4s5.1 1.67 6.5 4"></path>
                        </svg>
                    </button>
                </div>
            </header>
            {showLogin && <LoginForm onClose={() => setShowLogin(false)}
                onLoginSuccess={() => {
                    setIsLoggedIn(true);
                    setShowLogin(false);
                }}
            />}
        </>
    );
}

export default NavHeader;