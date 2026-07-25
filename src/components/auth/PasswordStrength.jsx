import "./PasswordStrength.css";

const PasswordStrength = ({ password }) => {
    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const passed = Object.values(checks).filter(Boolean).length;

    const percentage = (passed / 5) * 100;

    let strength = "Weak";

    if (passed === 5) strength = "Strong";
    else if (passed >= 3) strength = "Medium";

    return (
        <div className="password-strength mt-2">

            <div className="progress">
                <div
    className={`progress-bar ${strength.toLowerCase()}`}
    style={{ width: `${percentage}%` }}
/>
            </div>

            <div className={`strength-text ${strength.toLowerCase()}`}>
                {strength}
            </div>

            <ul className="password-checklist">

                <li className={checks.length ? "valid" : "invalid"}>
                    {checks.length ? "✔" : "✖"} At least 8 characters
                </li>

                <li className={checks.uppercase ? "valid" : "invalid"}>
                    {checks.uppercase ? "✔" : "✖"} One uppercase letter
                </li>

                <li className={checks.lowercase ? "valid" : "invalid"}>
                    {checks.lowercase ? "✔" : "✖"} One lowercase letter
                </li>

                <li className={checks.number ? "valid" : "invalid"}>
                    {checks.number ? "✔" : "✖"} One number
                </li>

                <li className={checks.special ? "valid" : "invalid"}>
                    {checks.special ? "✔" : "✖"} One special character
                </li>

            </ul>

        </div>
    );
};

export default PasswordStrength;