import { motion } from "framer-motion";
import {
    FiMapPin,
    FiHome,
    FiGlobe,
    FiEdit2,
    FiSave,
    FiX,
} from "react-icons/fi";

import "./AddressCard.css";

function AddressCard({

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
            className="address-card"
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
        >

            <div className="address-header">

                <h3>

                    Shipping Address

                </h3>

                {

                    !editing && (

                        <button
                            className="address-edit-btn"
                            onClick={() => setEditing(true)}
                        >

                            <FiEdit2 />

                            Edit

                        </button>

                    )

                }

            </div>

            <div className="address-grid">

                <div className="full">

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

                <div>

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

                <div>

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

                <div>

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

                <div>

                    <label>

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

                    <div className="address-actions">

                        <button
                            className="save-address-btn"
                            onClick={handleSave}
                            disabled={saving}
                        >

                            <FiSave />

                            {

                                saving

                                    ? "Saving..."

                                    : "Save"

                            }

                        </button>

                        <button
                            className="cancel-address-btn"
                            onClick={handleCancel}
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

export default AddressCard;