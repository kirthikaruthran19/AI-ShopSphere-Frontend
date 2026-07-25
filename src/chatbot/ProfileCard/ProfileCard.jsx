import "./ProfileCard.css";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiEdit2,
} from "react-icons/fi";

function ProfileCard({ profile, onEdit }) {

    if (!profile) {
        return null;
    }

    const fullName =
        `${profile.first_name || ""} ${profile.last_name || ""}`.trim() ||
        profile.username;

    const address = [
        profile.address,
        profile.city,
        profile.state,
        profile.country,
        profile.pincode,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        <div className="profile-card">

            <div className="profile-header">

                {profile.profile_image ? (
                    <img
                        src={profile.profile_image}
                        alt={fullName}
                        className="profile-avatar"
                    />
                ) : (
                    <div className="profile-avatar profile-avatar-placeholder">
                        <FiUser size={42} />
                    </div>
                )}

                <div className="profile-info">

                    <h5 className="profile-name">
                        {fullName}
                    </h5>

                    <small className="profile-username">
                        @{profile.username}
                    </small>

                    <button
                        className="profile-edit-btn"
                        onClick={onEdit}
                    >
                        <FiEdit2 />
                        Edit Profile
                    </button>

                </div>

            </div>

            <div className="profile-details">

                <div className="profile-item">
                    <FiMail className="profile-icon" />
                    <span>
                        {profile.email || "Not provided"}
                    </span>
                </div>

                <div className="profile-item">
                    <FiPhone className="profile-icon" />
                    <span>
                        {profile.phone_number || "Not provided"}
                    </span>
                </div>

                <div className="profile-item">
                    <FiMapPin className="profile-icon" />
                    <span>
                        {address || "Address not provided"}
                    </span>
                </div>

            </div>

        </div>
    );
}

export default ProfileCard;