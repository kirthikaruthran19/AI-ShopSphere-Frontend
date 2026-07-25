import Hero from "../../components/Hero/Hero";
import BrandStrip from "../../components/BrandStrip/BrandStrip";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

function Home() {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Trusted Brands */}
            <BrandStrip />

            {/* Product Categories */}
            <Categories />

            {/* Featured Products */}
            <FeaturedProducts />
        </>
    );
}

export default Home;