import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // Load user on app startup
    useEffect(() => {

        const initializeAuth = async () => {

            try {

                if (!authService.isAuthenticated()) {

                    setLoading(false);

                    return;

                }

                const profile = await authService.profile();

                setUser(profile);

            } catch (error) {

                console.error("Authentication Error:", error);

                authService.logout();

                setUser(null);

            } finally {

                setLoading(false);

            }

        };

        initializeAuth();

    }, []);

    // Login
    const login = async (credentials) => {

        try {

            await authService.login(credentials);

            const profile = await authService.profile();

            setUser(profile);

            return profile;

        } catch (error) {

            throw error;

        }

    };

    // Register
    const register = async (userData) => {

        return await authService.register(userData);

    };

    // Logout
    const logout = () => {

        authService.logout();

        setUser(null);

    };

    // Refresh profile manually
    const refreshUser = async () => {

        try {

            const profile = await authService.profile();

            setUser(profile);

            return profile;

        } catch (error) {

            logout();

            throw error;

        }

    };

    // ✅ NEW - Update Profile
    const updateUser = async (profileData) => {

        try {

            const updatedUser =
                await authService.updateProfile(profileData);

            setUser(updatedUser);

            return updatedUser;

        } catch (error) {

            throw error;

        }

    };

    const value = {

        user,

        loading,

        login,

        register,

        logout,

        refreshUser,

        updateUser, // ✅ NEW

        isAuthenticated: !!user,

    };

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}