import { useContext } from "react";
import { CartContext } from "../../contexts/Cart-Context";

import "./ProductCard-component.scss";

import PropTypes from "prop-types";

const ProductCard = ({ recipe }) => {
  const { setAddToCart } = useContext(CartContext);

  const { label, image, totalWeight, cuisineType } = recipe;

  const handleCartProduct = () => setAddToCart(recipe);

  const formattedNumber = totalWeight.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="product">
      <div className="product--content">
        <div className="product__image-container">
          <img src={image} className="product__image" alt="" />
          <span className="product__cart-content" onClick={handleCartProduct}>
            <i className="fa-regular fa-heart product__cart-content_icon" />
          </span>
        </div>
        <div className="product--content-desc">
          <h3 className="product--title">{label}</h3>
          <h5 className="history">
            <i className="fa-regular fa-clock" /> {cuisineType}
          </h5>

          <div className="product--foot-content">
            <div>
              <span className="rating">
                <i className="fa-sharp fa-solid fa-star" /> rating
              </span>
              <span className="review">(reviews)</span>
            </div>
            <p className="price">${formattedNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  totalWeight: PropTypes.number.isRequired,
  cuisineType: PropTypes.array.isRequired,
};

export default ProductCard;