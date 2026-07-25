import "./FormInput.css";

function FormInput({
    label,
    type = "text",
    name,
    value,
    onChange,
    error,
    icon,
    placeholder = "",
    required = false,
}) {
    return (
        <div className="form-input-wrapper mb-3">

            <label className="form-label fw-semibold">
                {label}
                {required && <span className="text-danger ms-1">*</span>}
            </label>

            <div className="input-group">

                {icon && (
                    <span className="input-group-text">
                        {icon && (
    <span className="input-group-text">
        {icon}
    </span>
)}
                    </span>
                )}

                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`form-control ${error ? "is-invalid" : ""}`}
                />

                {error && (
                    <div className="invalid-feedback">
                        {error}
                    </div>
                )}

            </div>

        </div>
    );
}

export default FormInput;