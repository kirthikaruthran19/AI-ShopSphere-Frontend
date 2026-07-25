import api from "./api";

export const getOrderTracking = async (orderId) => {
    const response = await api.get(
        `/orders/${orderId}/tracking/`
    );

    return response.data;
};

export const updateOrderStatus = async (
    orderId,
    status
) => {
    const response = await api.patch(
        `/orders/${orderId}/update-status/`,
        {
            status,
        }
    );

    return response.data;
};