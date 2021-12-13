import React from "react";
import { useSelector } from "react-redux";
import { addProduct } from "../../redux/actions/productAction";
import { removeProduct } from "../../redux/actions/productAction";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import "./Cart.css";
import { useDispatch } from "react-redux";

const Cart = () => {
  const productCart = useSelector((state) => state.cartProducts.products);
  const dispatch = useDispatch()

  const total = productCart.reduce((total, product) => {
    return total + product.price * product.quality
  }, 0);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product))
  }

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product))
  }

  return (
    <>
      <div className={productCart.length !== 0 ? 'cart': 'displaynone'}>
        {productCart.map((product) => {
          const { title, price, image, quality, id } = product;
          return (
            <div className="cart-container" key={id}>
              <div className="cart-img">
                <img src={image} alt={title} />
              </div>
              <div className="cart-content">
                <h1>{title}</h1>
                <h3>${price}</h3>
                <div className="cart-quality">
                  {quality}
                  <div className="cart-icons">
                    <ArrowLeftIcon onClick={() => handleRemoveProduct(product)} style={{cursor: 'pointer'}}/>
                    <ArrowRightIcon onClick={() => handleAddProduct(product)} style={{cursor: 'pointer'}}/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="total">
          <p>Total</p>$ {total.toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default Cart;
