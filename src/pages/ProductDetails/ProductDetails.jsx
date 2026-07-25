import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductBySlug } from "../../services/productService";

import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import ReviewSection from "../../components/Reviews/ReviewSection/ReviewSection";

import "./ProductDetails.css";

function ProductDetails() {
    const { slug } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getProductBySlug(slug);

            setProduct(data);
        } catch (err) {
            console.error(err);
            setError("Product not found.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="product-details-page py-5">
                <div className="container text-center">
                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    <p className="mt-3">Loading product...</p>
                </div>
            </section>
        );
    }

    if (error || !product) {
        return (
            <section className="product-details-page py-5">
                <div className="container text-center">

                    <h2 className="mb-3">
                        Product Not Found
                    </h2>

                    <p className="text-muted">
                        The requested product doesn't exist or has been removed.
                    </p>

                </div>
            </section>
        );
    }

    return (
        <section className="product-details-page py-5">

            <div className="container">

                <div className="row g-5 align-items-start">

                    <div className="col-lg-6">
                        <ProductGallery product={product} />
                    </div>

                    <div className="col-lg-6">
                        <ProductInfo product={product} />
                    </div>

                </div>
<ReviewSection productId={product.id} />
                <RelatedProducts
                    category={product.category}
                    currentSlug={product.slug}
                />

            </div>

        </section>
    );
}

export default ProductDetails;