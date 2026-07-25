import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../contexts/ProductContext";
import { useSearchParams } from "react-router-dom";
import "./Shop.css";

function Shop() {
    const {
        products = [],
        categories = [],
        loading,
    } = useProducts();
    const [searchParams] = useSearchParams();

    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const categoryList = [
        "All",
        ...categories.map((cat) => cat.name),
    ];
    const [search, setSearch] = useState("");
    useEffect(() => {
        const query = searchParams.get("search");

        if (query) {
            setSearch(query);
        }
        const categoryQuery = searchParams.get("category");

        if (categoryQuery) {
            setCategory(categoryQuery);
        }
    }, [searchParams]);
    const filteredProducts = useMemo(() => {
        let data = [...products];

        // Search
        if (search.trim()) {
            data = data.filter((product) =>
                product.name
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        // Category
        if (category !== "All") {
            data = data.filter(
                (product) =>
                    product.category?.name === category ||
                    product.category === category
            );
        }

        // Min Price
        if (minPrice !== "") {
            data = data.filter(
                (product) =>
                    Number(product.discount_price || product.price) >=
                    Number(minPrice)
            );
        }

        // Max Price
        if (maxPrice !== "") {
            data = data.filter(
                (product) =>
                    Number(product.discount_price || product.price) <=
                    Number(maxPrice)
            );
        }

        // Sorting
        switch (sort) {
            case "low":
                data.sort(
                    (a, b) =>
                        Number(a.discount_price || a.price) -
                        Number(b.discount_price || b.price)
                );
                break;

            case "high":
                data.sort(
                    (a, b) =>
                        Number(b.discount_price || b.price) -
                        Number(a.discount_price || a.price)
                );
                break;

            case "name":
                data.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;

            default:
                break;
        }

        return data;
    }, [
        products,
        search,
        category,
        sort,
        minPrice,
        maxPrice,
    ]);

    const clearFilters = () => {
        setSearch("");
        setCategory("All");
        setSort("default");
        setMinPrice("");
        setMaxPrice("");
    };

    if (loading) {
        return (
            <div className="shop-loading">
                Loading Products...
            </div>
        );
    }

    return (
        <section className="shop-page">
            <div className="container">

                <div className="shop-header">

                    <h1>Our Shop</h1>

                    <p>
                        Browse our premium collection.
                    </p>

                    <div className="shop-count">
                        {filteredProducts.length} Products Available
                    </div>

                </div>

                <div className="shop-toolbar">

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                    >
                        {categoryList.map((cat) => (
                            <option
                                key={cat}
                                value={cat}
                            >
                                {cat}
                            </option>
                        ))}
                    </select>

                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) =>
                            setMinPrice(e.target.value)
                        }
                    />

                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) =>
                            setMaxPrice(e.target.value)
                        }
                    />

                    <select
                        value={sort}
                        onChange={(e) =>
                            setSort(e.target.value)
                        }
                    >
                        <option value="default">
                            Sort By
                        </option>

                        <option value="low">
                            Price : Low to High
                        </option>

                        <option value="high">
                            Price : High to Low
                        </option>

                        <option value="name">
                            Name (A-Z)
                        </option>
                    </select>

                    <button
                        className="clear-filter-btn"
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>

                </div>

                <div className="shop-grid">

                    {filteredProducts.length > 0 ? (

                        filteredProducts.map((product) => (

                            <motion.div
                                key={product.id}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                }}
                                viewport={{
                                    once: true,
                                }}
                            >

                                <ProductCard
                                    product={product}
                                />

                            </motion.div>

                        ))

                    ) : (

                        <div className="shop-empty">

                            <h3>No Products Found</h3>

                            <p>
                                Try changing your search or filters.
                            </p>

                        </div>

                    )}

                </div>

            </div>
        </section>
    );
}

export default Shop;