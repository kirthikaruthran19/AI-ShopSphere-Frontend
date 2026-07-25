import "./QuantitySelector.css";

function QuantitySelector({
    quantity,
    setQuantity,
    max = 999,
    min = 1,
}) {

    const decrease = () => {
        if (quantity > min) {
            setQuantity(quantity - 1);
        }
    };

    const increase = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
        }
    };

    const handleChange = (e) => {
        let value = Number(e.target.value);

        if (isNaN(value)) value = min;

        if (value < min) value = min;

        if (value > max) value = max;

        setQuantity(value);
    };

    return (
        <div className="quantity-selector">

            <button
                type="button"
                className="qty-btn"
                onClick={decrease}
                disabled={quantity <= min}
            >
                −
            </button>

            <input
                type="number"
                value={quantity}
                min={min}
                max={max}
                onChange={handleChange}
            />

            <button
                type="button"
                className="qty-btn"
                onClick={increase}
                disabled={quantity >= max}
            >
                +
            </button>

        </div>
    );
}

export default QuantitySelector;