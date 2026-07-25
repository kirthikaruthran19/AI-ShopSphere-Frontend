import api from "./api";

// ==============================
// Create Order
// ==============================

export const createOrder = async (orderData) => {

    const response = await api.post(

        "/orders/create-order/",

        orderData

    );

    return response.data;

};

// ==============================
// Get All Orders
// ==============================

export const getOrders = async () => {

    const response = await api.get("/orders/");

    return response.data;

};

// ==============================
// Get Single Order
// ==============================

export const getOrder = async (id) => {

    const response = await api.get(`/orders/${id}/`);

    return response.data;

};