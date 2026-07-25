import api from "./api";

export const getProducts = async () => {
    const response = await api.get("products/");
    return response.data.results;
};

export const getProduct = async (slug) => {
    const response = await api.get(`products/${slug}/`);
    return response.data;
};

export const getProductBySlug = async (slug) => {
    const response = await api.get(`products/${slug}/`);
    return response.data;
};

export const getCategories = async () => {
    const response = await api.get("categories/");
    return response.data;
};