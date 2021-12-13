import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite, addProduct } from "../../redux/actions/productAction";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { title, image, price, description, rating } = product;
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
    // dispatch(addFavorite(product))
  };

  const handleAddFavor = (product) => {
    dispatch(addFavorite(product));
  };

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <h5>$ {price}</h5>
          <p>{description}</p>
        </div>
        <button className="card-btn" onClick={() => handleAddProduct(product)}>
          Add to Cart
        </button>
        <div className="card-icons">
          <div className="icon-item">
            <FavoriteBorderIcon
              style={{ cursor: "pointer" }}
              onClick={() => handleAddFavor(product)}
            />
          </div>
          <div className="icon-item">
            <ZoomOutMapIcon style={{ cursor: "pointer" }}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
