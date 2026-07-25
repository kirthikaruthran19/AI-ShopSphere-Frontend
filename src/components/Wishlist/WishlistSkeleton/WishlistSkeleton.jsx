import "./WishlistSkeleton.css";

function WishlistSkeleton() {

    return (

        <section className="ws-skeleton-page">

            {/* Header */}

            <div className="ws-sk-header shimmer"></div>

            {/* Summary */}

            <div className="ws-sk-summary">

                {[1, 2, 3, 4].map((item) => (

                    <div
                        key={item}
                        className="ws-sk-summary-card shimmer"
                    ></div>

                ))}

            </div>

            {/* Products */}

            <div className="ws-sk-grid">

                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

                    <div
                        key={item}
                        className="ws-sk-card"
                    >

                        <div className="ws-sk-image shimmer"></div>

                        <div className="ws-sk-content">

                            <div className="ws-sk-line ws-sk-short shimmer"></div>

                            <div className="ws-sk-line shimmer"></div>

                            <div className="ws-sk-line ws-sk-medium shimmer"></div>

                            <div className="ws-sk-price shimmer"></div>

                            <div className="ws-sk-buttons">

                                <div className="ws-sk-btn shimmer"></div>

                                <div className="ws-sk-btn shimmer"></div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default WishlistSkeleton;