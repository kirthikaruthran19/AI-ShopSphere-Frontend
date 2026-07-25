import { motion } from "framer-motion";

import WishlistCard from "../WishlistCard/WishlistCard";

import "./WishlistGrid.css";

function WishlistGrid({ items }) {

    return (

        <motion.section
            className="ws-grid"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.08,
                    },
                },
            }}
        >

            {
                items.map((item) => (

                    <motion.div
                        key={item.id}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 25,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                    >

                        <WishlistCard
                            item={item}
                        />

                    </motion.div>

                ))
            }

        </motion.section>

    );

}

export default WishlistGrid;