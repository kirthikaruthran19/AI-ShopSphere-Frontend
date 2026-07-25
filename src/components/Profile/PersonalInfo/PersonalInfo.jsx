import { motion } from "framer-motion";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiHome,
    FiGlobe,
    FiSave,
    FiEdit,
    FiX,
} from "react-icons/fi";

import "./PersonalInfo.css";

function PersonalInfo({
    editing,
    saving,
    formData,
    handleChange,
    handleSave,
    handleCancel,
    setEditing,
}) {

    return (

        <motion.div
            className="personal-info-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >

            <div className="personal-info-header">

                <h3>Personal Information</h3>

                {
                    !editing && (

                        <button
                            className="edit-btn"
                            onClick={() => setEditing(true)}
                        >
                            <FiEdit />
                            Edit
                        </button>

                    )
                }

            </div>

            <div className="personal-info-grid">

                <div className="form-group">

                    <label>
                        <FiUser />
                        First Name
                    </label>

                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group">

                    <label>
                        <FiUser />
                        Last Name
                    </label>

                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group">

                    <label>
                        <FiMail />
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group">

                    <label>
                        <FiPhone />
                        Phone Number
                    </label>

                    <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group full-width">

                    <label>
                        <FiHome />
                        Address
                    </label>

                    <textarea
                        rows="3"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group">

                    <label>
                        <FiMapPin />
                        City
                    </label>

                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group">

                    <label>
                        <FiMapPin />
                        State
                    </label>

                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group">

                    <label>
                        <FiGlobe />
                        Country
                    </label>

                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

                <div className="form-group">

                    <label>
                        <FiMapPin />
                        Pincode
                    </label>

                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        disabled={!editing}
                    />

                </div>

            </div>

            {
                editing && (

                    <div className="personal-actions">

                        <button
                            className="save-btn"
                            onClick={handleSave}
                            disabled={saving}
                        >

                            <FiSave />

                            {
                                saving
                                    ? "Saving..."
                                    : "Save Changes"
                            }

                        </button>

                        <button
                            className="cancel-btn"
                            onClick={handleCancel}
                            disabled={saving}
                        >

                            <FiX />

                            Cancel

                        </button>

                    </div>

                )
            }

        </motion.div>

    );

}

export default PersonalInfo;