import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaSignInAlt } from "react-icons/fa";

import AuthLayoutCard from "../../components/auth/AuthLayoutCard";
import FormInput from "../../components/auth/FormInput";
import PasswordInput from "../../components/auth/PasswordInput";
import { useAuth } from "../../contexts/AuthContext";

import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: "",
        });

        setApiError("");
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            await login(formData);

            navigate("/");

        } catch (error) {

            if (error.response?.data?.detail) {
                setApiError(error.response.data.detail);
            } else {
                setApiError("Unable to login. Please try again.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayoutCard
            title="Welcome Back 👋"
            subtitle="Login to continue shopping"
        >
            <form onSubmit={handleSubmit}>

                {apiError && (
                    <div className="alert alert-danger">
                        {apiError}
                    </div>
                )}

                <FormInput
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    error={errors.username}
                    icon={<FaUser />}
                    placeholder="Enter username"
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

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="remember"
                        >
                            Remember me
                        </label>
                    </div>

                    <Link to="#" className="small">
                        Forgot Password?
                    </Link>

                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: .98 }}
                    type="submit"
                    className="btn btn-primary w-100 login-btn"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span
                                className="spinner-border spinner-border-sm me-2"
                            ></span>

                            Signing In...
                        </>
                    ) : (
                        <>
                            <FaSignInAlt className="me-2" />
                            Login
                        </>
                    )}
                </motion.button>

                <p className="text-center mt-4 mb-0">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="ms-2 fw-bold text-decoration-none"
                    >
                        Register
                    </Link>

                </p>

            </form>
        </AuthLayoutCard>
    );
}

export default Login;