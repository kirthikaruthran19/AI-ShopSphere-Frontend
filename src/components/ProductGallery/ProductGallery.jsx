import { useEffect, useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ product }) {

    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {

        if (!product) return;

        // Use thumbnail as the default image
        if (product.thumbnail) {
            setSelectedImage(product.thumbnail);
        }

    }, [product]);

    // Build image list
    const images = [];

    if (product?.thumbnail) {
        images.push(product.thumbnail);
    }

    // Additional images from backend
    if (Array.isArray(product?.images)) {
        product.images.forEach((img) => {
            if (img.image) {
                images.push(img.image);
            }
        });
    }

    return (
        <div className="product-gallery">

            <div className="gallery-main">

                <img
                    src={selectedImage}
                    alt={product.name}
                    className="gallery-main-image"
                />

            </div>

            {images.length > 1 && (

                <div className="gallery-thumbnails">

                    {images.map((image, index) => (

                        <button
                            key={index}
                            className={`gallery-thumbnail ${
                                selectedImage === image ? "active" : ""
                            }`}
                            onClick={() => setSelectedImage(image)}
                        >

                            <img
                                src={image}
                                alt={`${product.name}-${index}`}
                            />

                        </button>

                    ))}

                </div>

            )}

        </div>
    );
}

export default ProductGallery;