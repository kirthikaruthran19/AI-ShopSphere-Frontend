import "./ShippingForm.css";

function ShippingForm({
    shippingData,
    setShippingData,
    errors = {},
    setErrors,
}) {

    const validateField = (name, value) => {

        let error = "";

        switch (name) {

            case "fullName":
                if (!value.trim()) {
                    error = "Full name is required";
                } else if (value.trim().length < 3) {
                    error = "Enter a valid full name";
                }
                break;

            case "email":
                if (!value.trim()) {
                    error = "Email is required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                    error = "Enter a valid email";
                }
                break;

            case "phone":
                if (!value.trim()) {
                    error = "Phone number is required";
                } else if (!/^[6-9]\d{9}$/.test(value)) {
                    error = "Enter a valid 10-digit phone number";
                }
                break;

            case "address":
                if (!value.trim()) {
                    error = "Address is required";
                } else if (value.trim().length < 10) {
                    error = "Address is too short";
                }
                break;

            case "city":
                if (!value.trim()) {
                    error = "City is required";
                }
                break;

            case "state":
                if (!value.trim()) {
                    error = "State is required";
                }
                break;

            case "zipCode":
                if (!value.trim()) {
                    error = "ZIP Code is required";
                } else if (!/^\d{6}$/.test(value)) {
                    error = "ZIP Code must be 6 digits";
                }
                break;

            default:
                break;
        }

        if (setErrors) {
            setErrors((prev) => ({
                ...prev,
                [name]: error,
            }));
        }
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        validateField(name, value);

        if (name === "fullName") {

            const names = value.trim().split(" ");

            setShippingData({
                ...shippingData,
                first_name: names[0] || "",
                last_name: names.slice(1).join(" "),
            });

            return;
        }

        if (name === "zipCode") {

            setShippingData({
                ...shippingData,
                postal_code: value,
            });

            return;
        }

        setShippingData({
            ...shippingData,
            [name]: value,
        });
    };

    return (
        <div className="shipping-card">

            <h2>Shipping Address</h2>

            <div className="shipping-grid">

                <div className="form-group">
                    <label>Full Name</label>

                    <input
                        type="text"
                        name="fullName"
                        value={`${shippingData.first_name || ""} ${shippingData.last_name || ""}`.trim()}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.fullName ? "input-error" : ""}
                    />

                    {errors.fullName && (
                        <small className="error-text">
                            {errors.fullName}
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={shippingData.email || ""}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? "input-error" : ""}
                    />

                    {errors.email && (
                        <small className="error-text">
                            {errors.email}
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label>Phone</label>

                    <input
                        type="tel"
                        name="phone"
                        value={shippingData.phone || ""}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className={errors.phone ? "input-error" : ""}
                    />

                    {errors.phone && (
                        <small className="error-text">
                            {errors.phone}
                        </small>
                    )}
                </div>

                <div className="form-group full-width">
                    <label>Address</label>

                    <textarea
                        rows="3"
                        name="address"
                        value={shippingData.address || ""}
                        onChange={handleChange}
                        placeholder="Street, Area, Landmark"
                        className={errors.address ? "input-error" : ""}
                    />

                    {errors.address && (
                        <small className="error-text">
                            {errors.address}
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label>City</label>

                    <input
                        type="text"
                        name="city"
                        value={shippingData.city || ""}
                        onChange={handleChange}
                        className={errors.city ? "input-error" : ""}
                    />

                    {errors.city && (
                        <small className="error-text">
                            {errors.city}
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label>State</label>

                    <input
                        type="text"
                        name="state"
                        value={shippingData.state || ""}
                        onChange={handleChange}
                        className={errors.state ? "input-error" : ""}
                    />

                    {errors.state && (
                        <small className="error-text">
                            {errors.state}
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label>ZIP Code</label>

                    <input
                        type="text"
                        name="zipCode"
                        value={shippingData.postal_code || ""}
                        onChange={handleChange}
                        className={errors.zipCode ? "input-error" : ""}
                    />

                    {errors.zipCode && (
                        <small className="error-text">
                            {errors.zipCode}
                        </small>
                    )}
                </div>

            </div>

        </div>
    );
}

export default ShippingForm;