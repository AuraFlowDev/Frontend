import { ChangeEvent, FormEvent, useRef, useState } from "react";
import "../css/LoginForm.css"

interface LoginFormProps {
    onClose: () => void;
    onLoginSuccess: () => void;
}

function LoginForm({ onClose, onLoginSuccess }: LoginFormProps) {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errorsOutput, setErrors] = useState<string[]>([]);

    const overlayRef = useRef<HTMLDivElement>(null);

    const getLoginFormErrors = (email: string, password: string): string[] => {
        const errors: string[] = [];

        if (email === "" || email == null) {
            errors.push("Email is required");
        }

        if (!password) {
            errors.push("Password is required");
        } else if (password.length < 8) {
            errors.push("Password must have at least 8 characters");
        } else if (!/[A-Z]/.test(password)) {
            errors.push("Password must contain at least one uppercase letter");
        } else if (!/[a-z]/.test(password)) {
            errors.push("Password must contain at least one lowercase letter");
        } else if (!/[0-9]/.test(password)) {
            errors.push("Password must contain at least one number");
        } else if (!/[\W_]/.test(password)) {
            errors.push("Password must contain at least one special character");
        }
        return errors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const validationErrors = getLoginFormErrors(emailInput, passwordInput);
        if (validationErrors.length) {
            setErrors(validationErrors);
            console.log("Fehler bei der Eingabe!");
            return;
        }

        try {
            const response = await fetch("http://167.172.165.97:80/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: emailInput, password: passwordInput }),
            });
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            const data = await response.json();
            localStorage.setItem('jwt', data.token);
            onLoginSuccess();
            console.log(data);
            onClose();
        } catch (err) {
            setErrors([err instanceof Error ? err.message : 'Unknown error']);
        }
    }

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    return (

        <div className="popup-overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <div className="popup">
                <div className="close-popup-btn" onClick={onClose}>&times;</div>
                <h1>SIGN IN</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-input">
                        <input
                            type="email"
                            name="email"
                            placeholder="YOUR EMAIL"
                            value={emailInput}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="PASSWORD"
                            value={passwordInput}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordInput(e.target.value)}
                            required
                        />
                        <button type="submit">SIGN IN</button>
                    </div>
                </form>
                {errorsOutput.length > 0 && (
                    <div className="error-messages">
                        {errorsOutput.map((err, idx) => (
                            <p key={idx} className="error-text">{err}</p>
                        ))}
                    </div>
                )}
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
    )
}

export default LoginForm;