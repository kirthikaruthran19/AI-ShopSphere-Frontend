export function recommendProducts(products = [], query = "") {

    const message = query.toLowerCase();

    const recommendationMap = {
        gaming: ["gaming"],
        laptop: ["laptop"],
        phone: ["phone", "iphone", "mobile"],
        headphone: ["headphone", "headphones", "earbuds", "airpods"],
    };

    for (const keywords of Object.values(recommendationMap)) {

        if (keywords.some((keyword) => message.includes(keyword))) {

            return products.filter((product) => {

                const searchableText = [
                    product.name,
                    product.brand,
                    product.description,
                    product.category?.name,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return keywords.some((keyword) =>
                    searchableText.includes(keyword)
                );

            });

        }

    }

    return [];

}