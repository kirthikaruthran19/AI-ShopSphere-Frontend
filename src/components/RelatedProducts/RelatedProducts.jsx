import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/productService";
import "./RelatedProducts.css";

function RelatedProducts({ category, currentSlug }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadRelatedProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, currentSlug]);

    const loadRelatedProducts = async () => {

        try {

            const response = await getProducts();

            // Support both paginated and non-paginated APIs
            const allProducts = Array.isArray(response)
                ? response
                : response.results || [];

            const categoryName =
                typeof category === "object"
                    ? category.name
                    : category;

            const related = allProducts.filter((product) => {

                const productCategory =
                    typeof product.category === "object"
                        ? product.category.name
                        : product.category;

                return (
                    product.slug !== currentSlug &&
                    productCategory === categoryName
                );
            });

            setProducts(related.slice(0, 4));

        } catch (error) {

            console.error("Related Products Error:", error);

        }

    };

    if (!products.length) return null;

    return (

        <section className="related-products">

            <h2 className="related-title">
                Related Products
            </h2>

            <div className="related-grid">

                {products.map((product) => (

                    <Link
                        key={product.id}
                        to={`/shop/${product.slug}`}
                        className="related-card"
                    >

                        <div className="related-image">

                            <img
                                src={product.thumbnail}
                                alt={product.name}
                            />

                        </div>

                        <div className="related-content">

                            <h5>{product.name}</h5>

                            <p className="related-price">
                                ₹{Number(
                                    product.discount_price || product.price
                                ).toLocaleString()}
                            </p>

                        </div>

                    </Link>

                ))}

            </div>

        </section>

    );
}

export default RelatedProducts;