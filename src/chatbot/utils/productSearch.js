export function searchProducts(products = [], query = "") {

    const searchText = query.toLowerCase().trim();

    if (!searchText) {
        return [];
    }

    const words = searchText
        .split(/\s+/)
        .filter(Boolean);

    return products.filter((product) => {

        const searchableText = [
            product.name,
            product.description,
            product.brand,
            product.category?.name,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return words.some((word) =>
            searchableText.includes(word)
        );

    });

}