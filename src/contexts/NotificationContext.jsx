import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
    useRef,
} from "react";

import {
    getNotifications,
    getNotificationCount,
    markAsRead,
    markAllAsRead,
    clearNotifications,
} from "../services/notificationService";

const NotificationContext = createContext();

export const useNotification = () =>
    useContext(NotificationContext);

export function NotificationProvider({
    children,
}) {

    const [notifications, setNotifications] =
        useState([]);

    const [unreadCount, setUnreadCount] =
        useState(0);

    const mountedRef = useRef(true);

    const loadNotifications = useCallback(async () => {

    try {

        const response = await getNotifications();

        if (!mountedRef.current) return;

        setNotifications(
            response.results || response || []
        );

    } catch (error) {

        console.error(
            "Notification Error:",
            error
        );

    }

}, []);

    const loadCount = useCallback(async () => {

    try {

        const response =
            await getNotificationCount();

        if (!mountedRef.current) return;

        setUnreadCount(
            response.count || 0
        );

    } catch (error) {

        console.error(
            "Notification Count Error:",
            error
        );

    }

}, []);

    const refreshNotifications =
        useCallback(async () => {

            await Promise.all([
                loadNotifications(),
                loadCount(),
            ]);

        }, [
            loadNotifications,
            loadCount,
        ]);

    const readNotification =
        useCallback(async (id) => {

            try {

                await markAsRead(id);

                await refreshNotifications();

            } catch (error) {

                console.error(error);

            }

        }, [refreshNotifications]);

    const readAll =
        useCallback(async () => {

            try {

                await markAllAsRead();

                await refreshNotifications();

            } catch (error) {

                console.error(error);

            }

        }, [refreshNotifications]);

    const clearAll =
        useCallback(async () => {

            try {

                await clearNotifications();

                await refreshNotifications();

            } catch (error) {

                console.error(error);

            }

        }, [refreshNotifications]);

    useEffect(() => {

        mountedRef.current = true;

        refreshNotifications();

        const interval =
            setInterval(() => {

                refreshNotifications();

            }, 30000);

        return () => {

            mountedRef.current = false;

            clearInterval(interval);

        };

    }, [refreshNotifications]);

    return (

        <NotificationContext.Provider
            value={{
                notifications,
                unreadCount,
                refreshNotifications,
                readNotification,
                readAll,
                clearAll,
            }}
        >

            {children}

        </NotificationContext.Provider>

    );

}