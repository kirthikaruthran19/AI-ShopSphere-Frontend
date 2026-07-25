import { useState } from "react";
import { motion } from "framer-motion";
import {
    FiEye,
    FiEyeOff,
    FiLock,
} from "react-icons/fi";
import { toast } from "react-toastify";

import { changePassword } from "../../services/profileService";

import "./ChangePassword.css";

function ChangePassword() {

    const [loading, setLoading] = useState(false);

    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [formData, setFormData] = useState({

        old_password: "",

        new_password: "",

        confirm_password: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await changePassword(formData);

            toast.success(
                "Password changed successfully"
            );

            setFormData({

                old_password: "",

                new_password: "",

                confirm_password: "",

            });

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to change password"

            );

        }

        finally {

            setLoading(false);

        }

    };

    const renderPasswordField = (
        label,
        name,
        value,
        show,
        setShow,
    ) => (

        <div className="password-group">

            <label>

                {label}

            </label>

            <div className="password-input">

                <input

                    type={
                        show
                            ? "text"
                            : "password"
                    }

                    name={name}

                    value={value}

                    onChange={handleChange}

                    required

                />

                <button

                    type="button"

                    onClick={() => setShow(!show)}

                >

                    {

                        show

                            ? <FiEyeOff />

                            : <FiEye />

                    }

                </button>

            </div>

        </div>

    );

    return (

        <motion.div

            className="change-password-page"

            initial={{
                opacity:0,
                y:25,
            }}

            animate={{
                opacity:1,
                y:0,
            }}

        >

            <div className="password-card">

                <div className="password-header">

                    <FiLock />

                    <h2>

                        Change Password

                    </h2>

                </div>

                <form onSubmit={handleSubmit}>

                    {

                        renderPasswordField(

                            "Current Password",

                            "old_password",

                            formData.old_password,

                            showOld,

                            setShowOld

                        )

                    }

                    {

                        renderPasswordField(

                            "New Password",

                            "new_password",

                            formData.new_password,

                            showNew,

                            setShowNew

                        )

                    }

                    {

                        renderPasswordField(

                            "Confirm Password",

                            "confirm_password",

                            formData.confirm_password,

                            showConfirm,

                            setShowConfirm

                        )

                    }

                    <button

                        className="save-password-btn"

                        disabled={loading}

                    >

                        {

                            loading

                                ? "Updating..."

                                : "Update Password"

                        }

                    </button>

                </form>

            </div>

        </motion.div>

    );

}

export default ChangePassword;