import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import {
    createOrder,
    getOrders,
    getOrder,
} from "../services/orderService";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }) {

    const [orders, setOrders] = useState([]);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    // ==========================
    // Place Order
    // ==========================

    const placeOrder = async (orderData) => {

        try {

            setLoading(true);

            const response = await createOrder(orderData);

            setCurrentOrder(response);

            return response;

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Unable to place order."
            );

            throw error;

        } finally {

            setLoading(false);

        }

    };

    // ==========================
    // Load Orders
    // ==========================

    const loadOrders = async () => {

        try {

            setLoading(true);

            const response = await getOrders();

            const data =
                response?.data ||
                response?.results ||
                response?.items ||
                response ||
                [];

            setOrders(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (error) {

            console.error(error);

            setOrders([]);

        } finally {

            setLoading(false);

        }

    };

    // ==========================
    // Load Single Order
    // ==========================

    const loadOrder = async (id) => {

        try {

            setLoading(true);

            const response = await getOrder(id);

            setCurrentOrder(response);

        } catch (error) {

            console.error(error);

            setCurrentOrder(null);

        } finally {

            setLoading(false);

        }

    };

    return (

        <OrderContext.Provider
            value={{

                loading,

                orders,

                currentOrder,

                placeOrder,

                loadOrders,

                loadOrder,

            }}
        >

            {children}

        </OrderContext.Provider>

    );

}