import "./ProductCard.css";

function ProductCard({ title, price, image, inStock }) {
  return (
    <div className="product-card">
      {/* Image */}
      <div className="image-box">
        <img src={image} alt={title} />
      </div>

      {/* Info */}
      <div className="product-info">
        <h2 className="product-title">{title}</h2>

        <p className="product-price">
          ${Number(price).toFixed(2)}
        </p>

        <span className={`stock ${inStock ? "in" : "out"}`}>
          {inStock ? "IN STOCK" : "OUT OF STOCK"}
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        className={`cart-btn ${!inStock ? "disabled" : ""}`}
        disabled={!inStock}
      >
        {inStock ? "Add to Cart" : "Notify Me"}
      </button>
    </div>
  );
}

export default ProductCard;
