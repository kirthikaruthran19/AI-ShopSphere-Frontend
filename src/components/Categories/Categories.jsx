import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FaLaptop,
    FaMobileAlt,
    FaTshirt,
    FaHome,
    FaGamepad,
    FaHeadphones,
} from "react-icons/fa";

import "./Categories.css";

function Categories() {

    const categories = [

        {
            name: "Electronics",
            icon: <FaLaptop />,
            items: "240 Products",
            link: "/shop?category=Electronics",
        },

        {
            name: "Mobiles",
            icon: <FaMobileAlt />,
            items: "150 Products",
           link: "/shop?category=Mobiles",
        },

        {
            name: "Fashion",
            icon: <FaTshirt />,
            items: "520 Products",
            link: "/shop?category=Fashion",
        },

        {
            name: "Home",
            icon: <FaHome />,
            items: "180 Products",
            link: "/shop?category=Home",
        },

        {
            name: "Gaming",
            icon: <FaGamepad />,
            items: "90 Products",
            link: "/shop?category=Gaming",
        },

        {
            name: "Accessories",
            icon: <FaHeadphones />,
            items: "300 Products",
            link: "/shop?category=Accessories",
        },

    ];

    return (

        <section className="categories section">

            <div className="container-custom">

                <h2 className="section-title">
                    Shop By Category
                </h2>

                <div className="category-grid">

                    {categories.map((category, index) => (

                        <motion.div
                            key={index}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                        >

                            <Link
                                to={category.link}
                                className="category-card"
                            >

                                <div className="category-icon">
                                    {category.icon}
                                </div>

                                <h4>{category.name}</h4>

                                <p>{category.items}</p>

                            </Link>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Categories;