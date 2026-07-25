import api from "./api";

/* ===========================
   Get All Notifications
=========================== */

export const getNotifications = async () => {

    const { data } = await api.get(
        "/notifications/"
    );

    return data;

};

/* ===========================
   Get Unread Notifications
=========================== */

export const getUnreadNotifications = async () => {

    const { data } = await api.get(
        "/notifications/unread/"
    );

    return data;

};

/* ===========================
   Unread Count
=========================== */

export const getNotificationCount = async () => {

    const { data } = await api.get(
        "/notifications/count/"
    );

    return data;

};

/* ===========================
   Mark One Notification Read
=========================== */

export const markAsRead = async (id) => {

    const { data } = await api.patch(
        `/notifications/${id}/read/`
    );

    return data;

};

/* ===========================
   Mark All Read
=========================== */

export const markAllAsRead = async () => {

    const { data } = await api.patch(
        "/notifications/read-all/"
    );

    return data;

};

/* ===========================
   Clear Notifications
=========================== */

export const clearNotifications = async () => {

    const { data } = await api.delete(
        "/notifications/clear/"
    );

    return data;

};