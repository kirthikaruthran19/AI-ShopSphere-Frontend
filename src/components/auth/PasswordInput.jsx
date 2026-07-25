import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./PasswordInput.css";

function PasswordInput({
    label,
    name,
    value,
    onChange,
    error,
    placeholder = "Enter password",
    required = false,
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-3">

            {/* Label */}
            <label className="form-label fw-semibold">
                {label}
                {required && <span className="text-danger ms-1">*</span>}
            </label>

            {/* Password Input */}
            <div className="input-group">

                {/* Lock Icon */}
                <span className="input-group-text">
                    <FaLock />
                </span>

                {/* Password Field */}
                <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete="current-password"
                />

                {/* Show / Hide Button */}
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

            </div>

            {/* Error Message */}
            {error && (
                <div className="text-danger small mt-1">
                    {error}
                </div>
            )}

        </div>
    );
}

export default PasswordInput;