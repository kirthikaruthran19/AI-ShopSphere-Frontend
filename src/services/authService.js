import api from "./api";

const TOKEN_KEYS = {
    access: "accessToken",
    refresh: "refreshToken",
};

const authService = {

    // Register User
    register: async (userData) => {
        const response = await api.post("auth/register/", userData);
        return response.data;
    },

    // Login User
    login: async (credentials) => {
        const response = await api.post("auth/login/", credentials);

        const { access, refresh } = response.data;

        localStorage.setItem(TOKEN_KEYS.access, access);
        localStorage.setItem(TOKEN_KEYS.refresh, refresh);

        return response.data;
    },

    // Get Logged-in User Profile
    profile: async () => {
    const response = await api.get("auth/profile/");
    return response.data.data;
},

    // ✅ Update Logged-in User Profile
    updateProfile: async (profileData) => {
    const response = await api.put(
        "auth/profile/",
        profileData
    );

    return response.data.data;
},

    // Refresh Access Token
    refreshToken: async () => {
        const refresh = localStorage.getItem(TOKEN_KEYS.refresh);

        if (!refresh) {
            throw new Error("Refresh token not found");
        }

        const response = await api.post("auth/refresh/", {
            refresh,
        });

        localStorage.setItem(
            TOKEN_KEYS.access,
            response.data.access
        );

        return response.data.access;
    },

    // Check Login Status
    isAuthenticated: () => {
        return !!localStorage.getItem(TOKEN_KEYS.access);
    },

    // Get Stored Access Token
    getAccessToken: () => {
        return localStorage.getItem(TOKEN_KEYS.access);
    },

    // Logout User
    logout: () => {
        localStorage.removeItem(TOKEN_KEYS.access);
        localStorage.removeItem(TOKEN_KEYS.refresh);
    },

};

export default authService;