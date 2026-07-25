import { createContext, useContext, useEffect, useState } from "react";
import {
    getProducts,
    getCategories,
} from "../services/productService";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        try {

            setLoading(true);

            const productData = await getProducts();
            const categoryData = await getCategories();

            const productList =
                productData?.data ||
                productData?.results ||
                productData?.items ||
                productData ||
                [];

            const categoryList =
                categoryData?.data ||
                categoryData?.results ||
                categoryData?.items ||
                categoryData ||
                [];

            setProducts(
                Array.isArray(productList)
                    ? productList
                    : []
            );

            setCategories(
                Array.isArray(categoryList)
                    ? categoryList
                    : []
            );

        } catch (error) {

            console.error("ProductContext Error:", error);

            setProducts([]);
            setCategories([]);

        } finally {

            setLoading(false);

        }

    };

    return (

        <ProductContext.Provider
            value={{
                products,
                categories,
                loading,
                loadData,
            }}
        >

            {children}

        </ProductContext.Provider>

    );

};

export const useProduct = () => useContext(ProductContext);

export const useProducts = () => useContext(ProductContext);