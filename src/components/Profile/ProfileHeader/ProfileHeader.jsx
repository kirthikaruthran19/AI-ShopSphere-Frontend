import { motion } from "framer-motion";
import { FiCamera } from "react-icons/fi";

import "./ProfileHeader.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ProfileHeader({
    user,
    imagePreview,
    onImageChange,
}) {

    const imageUrl =
        user?.profile_image
            ? `${BASE_URL}${user.profile_image}`
            : null;

    return (

        <motion.div
            className="profile-header-card"
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >

            <div className="profile-avatar-wrapper">

                <div className="profile-avatar">

                    {
                        imagePreview ? (

                            <img
                                src={imagePreview}
                                alt="Profile"
                            />

                        ) : user?.profile_image ? (

                            <img
                                src={`${BASE_URL}${user.profile_image}`}
                                alt={user.username}
                            />

                        ) : (

                            <span>

                                {
                                    (
                                        user?.first_name ||
                                        user?.username ||
                                        "U"
                                    )
                                        .charAt(0)
                                        .toUpperCase()
                                }

                            </span>

                        )
                    }

                    <label className="avatar-upload">

                        <FiCamera />

                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={onImageChange}
                        />

                    </label>

                </div>


            </div>

            <div className="profile-user-info">

                <h2>

                    {
                        user?.first_name
                            ? `${user.first_name} ${user.last_name}`
                            : user?.username
                    }

                </h2>

                <p>@{user?.username}</p>

                <span>

                    Member Since{" "}
                    {
                        user?.date_joined
                            ? new Date(
                                user.date_joined
                            ).toLocaleDateString()
                            : "-"
                    }

                </span>

            </div>

        </motion.div>

    );

}

export default ProfileHeader;