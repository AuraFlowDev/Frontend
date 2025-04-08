import "../css/NavHeader.css"

function NavHeader() {

    return (
        <header className="headerClass">
            <div className="logo">AF</div>
            <div className="nav-container">
                <ul className="nav-list">
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="tokenomics.html">TOKENOMICS</a></li>
                    <li><a href="#fund">FUND</a></li>
                    <li><a href="news.html">NEWS</a></li>
                </ul>
                <div className="open-popup" id="open-popup">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="7" r="4"></circle>
                        <path d="M5.5 20c1.4-2.33 3.73-4 6.5-4s5.1 1.67 6.5 4"></path>
                    </svg>
                </div>
                <div className="popup-overlay" id="popup-overlay">
                    <div className="popup">
                        <div className="close-popup-btn" id="close-popup-btn">&times;</div>
                        <h1>SIGN IN</h1>
                        <form className="login-form" id="login-form" method="POST">
                            <div className="login-input">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="YOUR EMAIL"
                                    required
                                />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="PASSWORD"
                                    required
                                />
                                <button type="submit">SIGN IN</button>
                            </div>
                        </form>
                        <div className="social-login">
                            <p>OR SIGN IN WITH</p>
                            <div className="social-buttons">
                                <button type="button">APPLE</button>
                                <button type="button">GOOGLE</button>
                            </div>
                            <p>
                                Don't have an account?
                                <a href="signup.html">SIGN UP</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header">
                <div className="hamburger-icon" id="open-mobile-nav-modal">
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
                <svg
                    className="user-icon-container-mobile"
                    viewBox="0 0 24 24"
                    fill="none"
                    id="open-login-modal-mobile"
                >
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M5.5 20c1.4-2.33 3.73-4 6.5-4s5.1 1.67 6.5 4"></path>
                </svg>
            </div>
        </header>);
}

export default NavHeader;