import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { useAuth } from "../../contexts/AuthContext";

import { uploadProfileImage } from "../../services/profileService";

import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import ProfileStats from "../../components/Profile/ProfileStats/ProfileStats";
import QuickActions from "../../components/Profile/QuickActions/QuickActions";
import PersonalInfo from "../../components/Profile/PersonalInfo/PersonalInfo";
import AddressCard from "../../components/Profile/AddressCard/AddressCard";
import ProfileSkeleton from "../../components/Profile/ProfileSkeleton/ProfileSkeleton";

import "./Profile.css";

function Profile() {

    const {

        user,

        loading,

        updateUser,

        refreshUser,

    } = useAuth();

    const [editing, setEditing] = useState(false);

    const [saving, setSaving] = useState(false);

    const [imagePreview, setImagePreview] = useState(null);

    const [formData, setFormData] = useState({

        first_name: "",

        last_name: "",

        email: "",

        phone_number: "",

        address: "",

        city: "",

        state: "",

        country: "",

        pincode: "",

    });

    useEffect(() => {

        if (!user) return;

        setFormData({

            first_name: user.first_name || "",

            last_name: user.last_name || "",

            email: user.email || "",

            phone_number: user.phone_number || "",

            address: user.address || "",

            city: user.city || "",

            state: user.state || "",

            country: user.country || "",

            pincode: user.pincode || "",

        });

    }, [user]);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSave = async () => {

        try {

            setSaving(true);

            await updateUser(formData);

            toast.success(
                "Profile updated successfully."
            );

            setEditing(false);

        }

        catch (error) {

            console.error(error);

            toast.error(
                "Failed to update profile."
            );

        }

        finally {

            setSaving(false);

        }

    };

    const handleCancel = () => {

        setEditing(false);

        setFormData({

            first_name: user.first_name || "",

            last_name: user.last_name || "",

            email: user.email || "",

            phone_number: user.phone_number || "",

            address: user.address || "",

            city: user.city || "",

            state: user.state || "",

            country: user.country || "",

            pincode: user.pincode || "",

        });

    };

    const handleImageUpload = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImagePreview(
            URL.createObjectURL(file)
        );

        try {

            await uploadProfileImage(file);

            await refreshUser();

            toast.success(
                "Profile image updated."
            );

        }

        catch (error) {

            console.error(error);

            toast.error(
                "Failed to upload image."
            );

        }

    };

    if (loading) {

        return <ProfileSkeleton />;

    }

    return (

        <div className="profile-page">

            <div className="container">

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.5,
                    }}

                >

                    <ProfileHeader

                        user={user}

                        imagePreview={imagePreview}

                        onImageChange={handleImageUpload}

                    />

                    <ProfileStats

                        orders={12}

                        wishlist={8}

                        cart={4}

                        reviews={6}

                    />

                    <QuickActions />

                    <PersonalInfo

                        editing={editing}

                        saving={saving}

                        formData={formData}

                        handleChange={handleChange}

                        handleSave={handleSave}

                        handleCancel={handleCancel}

                        setEditing={setEditing}
                                            />

                    <AddressCard

                        editing={editing}

                        saving={saving}

                        formData={formData}

                        handleChange={handleChange}

                        handleSave={handleSave}

                        handleCancel={handleCancel}

                        setEditing={setEditing}

                    />

                </motion.div>

            </div>

        </div>

    );

}

export default Profile;