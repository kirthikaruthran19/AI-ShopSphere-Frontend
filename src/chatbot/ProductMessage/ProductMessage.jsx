import "./ProductMessage.css";
import ProductCard from "../ProductCard/ProductCard";

const BASE_URL = "http://127.0.0.1:8000";

function ProductMessage({
    title = "Recommended Products",
    products = [],
    onView,
    onCart,
    onWishlist,
}) {

    if (!products.length) {
        return null;
    }

    return (
        <div className="product-message">

            <div className="product-message-header">
                <span className="product-message-title">
                    {title}
                </span>
            </div>

            <div className="product-message-list">

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        image={
                            product.thumbnail
                                ? `${BASE_URL}${product.thumbnail}`
                                : ""
                        }
                        name={product.name}
                        category={product.category}
                        brand={product.brand}
                        price={product.final_price}
                        originalPrice={product.price}
                        inStock={product.in_stock}
                        slug={product.slug}
                        product={product}
                        onView={() => onView?.(product)}
                        onCart={() => onCart?.(product)}
                        onWishlist={() => onWishlist?.(product)}
                    />

                ))}

            </div>

        </div>
    );
}

export default ProductMessage;