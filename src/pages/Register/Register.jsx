import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaUser,
    FaEnvelope,
    FaUserPlus,
} from "react-icons/fa";

import AuthLayoutCard from "../../components/auth/AuthLayoutCard";
import FormInput from "../../components/auth/FormInput";
import PasswordInput from "../../components/auth/PasswordInput";
import PasswordStrength from "../../components/auth/PasswordStrength";

import { useAuth } from "../../contexts/AuthContext";

import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const { register } = useAuth();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const isPasswordValid = (password) => {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
};

    const [success, setSuccess] = useState("");

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

    };

    const validate = () => {

        const newErrors = {};

        if (!formData.first_name.trim())
            newErrors.first_name = "First name is required";

        if (!formData.last_name.trim())
            newErrors.last_name = "Last name is required";

        if (!formData.username.trim())
            newErrors.username = "Username is required";

        if (!formData.email.trim())
            newErrors.email = "Email is required";

        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        )
            newErrors.email = "Invalid email";

        if (!isPasswordValid(formData.password)) {
    newErrors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.";
}

        if (
            formData.password !==
            formData.confirm_password
        )
            newErrors.confirm_password =
                "Passwords do not match";

        if (!formData.terms)
            newErrors.terms =
                "Please accept Terms & Conditions";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) return;

        try {

            setLoading(true);

            const payload = { ...formData };

            delete payload.terms;

            await register(payload);

            setSuccess(
    "🎉 Registration successful! Redirecting to Login..."
);

            setTimeout(() => {

    navigate("/login");

}, 2500);

        } catch (error) {

    if (error.response?.data?.errors) {

        const backendErrors = {};

        Object.keys(error.response.data.errors).forEach((key) => {
            backendErrors[key] =
                error.response.data.errors[key][0];
        });

        setErrors(backendErrors);

    }

} finally {

    setLoading(false);

}
    };

    return (

        <AuthLayoutCard
            title="Create Account"
            subtitle="Join ShopSphere today"
        >

            <form onSubmit={handleSubmit}>

                {success && (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="alert alert-success d-flex align-items-center shadow-sm"
    >
        <span className="me-2">✅</span>
        <span>{success}</span>
    </motion.div>
)}

                <div className="row">

                    <div className="col-md-6">

                        <FormInput
                            label="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            error={errors.first_name}
                            icon={<FaUser />}
                            required
                        />

                    </div>

                    <div className="col-md-6">

                        <FormInput
                            label="Last Name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            error={errors.last_name}
                            icon={<FaUser />}
                            required
                        />

                    </div>

                </div>

                <FormInput
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    error={errors.username}
                    icon={<FaUser />}
                    required
                />

                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    icon={<FaEnvelope />}
                    required
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    required
                />

                <PasswordStrength
                    password={formData.password}
                />

                <PasswordInput
                    label="Confirm Password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    error={errors.confirm_password}
                    required
                />

                <div className="form-check my-3">

                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        id="terms"
                    />

                    <label
                        className="form-check-label"
                        htmlFor="terms"
                    >
                        I agree to the Terms &
                        Conditions
                    </label>

                </div>

                {errors.terms && (
                    <small className="text-danger">
                        {errors.terms}
                    </small>
                )}

                <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: .98 }}
    className="btn btn-primary w-100 register-btn mt-3"
    disabled={
        loading ||
        !formData.terms ||
        !isPasswordValid(formData.password) ||
        formData.password !== formData.confirm_password
    }
>

                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2"></span>

                            Creating Account...

                        </>
                    ) : (
                        <>
                            <FaUserPlus className="me-2" />

                            Create Account
                        </>
                    )}

                </motion.button>

                <p className="text-center mt-4">

                    Already have an account?

                    <Link
                        to="/login"
                        className="fw-bold ms-2"
                    >
                        Login
                    </Link>

                </p>

            </form>

        </AuthLayoutCard>

    );

}

export default Register;