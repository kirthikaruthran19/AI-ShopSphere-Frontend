export const uploadProfileImage = async (image) => {

    const formData = new FormData();

    formData.append(
        "profile_image",
        image
    );

    const response = await api.put(
        "/accounts/profile/",
        formData,
        {
            headers: {
                "Content-Type":
                    "multipart/form-data",
            },
        }
    );

    return response.data;

};