import { motion } from "framer-motion";
import {
    FaApple,
    FaGoogle,
    FaAmazon,
    FaMicrosoft
} from "react-icons/fa";
import { SiSamsung } from "react-icons/si";

import "./BrandStrip.css";

function BrandStrip() {

    const brands = [
        { icon: <FaApple />, name: "Apple" },
        { icon: <SiSamsung />, name: "Samsung" },
        { icon: <FaAmazon />, name: "Amazon" },
        { icon: <FaGoogle />, name: "Google" },
        { icon: <FaMicrosoft />, name: "Microsoft" },
    ];

    return (

        <section className="brand-strip section">

            <div className="container-custom">

                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Trusted By Top Brands
                </motion.h2>

                <div className="brand-grid">

                    {brands.map((brand, index) => (

                        <motion.div
                            key={index}
                            className="brand-card"
                            whileHover={{
                                y: -8,
                                scale: 1.05,
                            }}
                        >
                            <div className="brand-icon">
                                {brand.icon}
                            </div>

                            <h5>{brand.name}</h5>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default BrandStrip;