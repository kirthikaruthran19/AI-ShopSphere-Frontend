import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../contexts/ProductContext";
import "./FeaturedProducts.css";

function FeaturedProducts() {

    const { products, loading } = useProducts();

    const featuredProducts = products
        .filter(product => product.is_featured)
        .slice(0, 8);

    if (loading) {
        return null;
    }

    return (
        <section className="featured-products">

            <div className="container">

                <motion.div
                    className="featured-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle">
                        Premium Collection
                    </span>

                    <h2 className="section-title">
                        Featured Products
                    </h2>

                    <p className="section-description">
                        Discover our best-selling premium products carefully selected for you.
                    </p>
                </motion.div>

                <div className="featured-grid">

                    {featuredProducts.map((product) => (

                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <ProductCard product={product} />
                        </motion.div>

                    ))}

                </div>

                <div className="featured-button">

                    <Link
                        to="/shop"
                        className="view-all-btn"
                    >
                        View All Products
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default FeaturedProducts;