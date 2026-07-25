import "./ComparisonCard.css";
import { FaStar } from "react-icons/fa";

function ComparisonCard({ products = [] }) {
    return (
        <div className="comparison-card">

            <div className="comparison-header">
                <h6>Product Comparison</h6>
            </div>

            <div className="comparison-table">

                <div className="comparison-row comparison-heading">
                    <div>Feature</div>

                    {products.map((product) => (
                        <div key={product.id}>
                            {product.name}
                        </div>
                    ))}
                </div>

                <div className="comparison-row">
                    <div>Price</div>

                    {products.map((product) => (
                        <div key={product.id}>
                            ₹{product.price}
                        </div>
                    ))}
                </div>

                <div className="comparison-row">
                    <div>Rating</div>

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="rating-cell"
                        >
                            <FaStar />
                            {product.rating}
                        </div>
                    ))}
                </div>

                <div className="comparison-row">
                    <div>Category</div>

                    {products.map((product) => (
                        <div key={product.id}>
                            {product.category}
                        </div>
                    ))}
                </div>

                <div className="comparison-row">
                    <div>Brand</div>

                    {products.map((product) => (
                        <div key={product.id}>
                            {product.brand}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default ComparisonCard;