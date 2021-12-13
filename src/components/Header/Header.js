import React, { useEffect, useState } from "react";
import ShopIcon from "@material-ui/icons/Shop";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const productCart = useSelector((state) => state.cartProducts.products);
  const favoCart = useSelector((state) => state.favoriteProducts.products);
  const [cart, setCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [favoQuantity, setFavoQuantity] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    if (productCart.length === 0) {
      setCart(false);
    }
  }, [productCart]);

  useEffect(() => {
    const quantityProduct = productCart.reduce((total, item, index) => {
      return total + item.quality;
    }, 0);
    setQuantity(quantityProduct);
  }, [productCart]);

  useEffect(() => {
    const qualityFavo = favoCart.length;
    setFavoQuantity(qualityFavo);
  }, [favoCart]);

  const hanldeToggleCart = () => {
    if (productCart.length !== 0) {
      setCart(!cart);
    }
  };

  const handleOpenMenu = () => {
    setNavbar(!navbar)
  }

  const handleCloseMenu = () => {
    setNavbar(false)
  }

  return (
    <>
      <header className="header" >
        <div className="container">
          <div className="logo">
            <Link
              to="/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className={navbar ? 'navbar' : 'navbar hidden' } onClick={handleCloseMenu}>
            <ul >
              {navData.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="icons">
            <Link
              to="/shop"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SearchIcon className="search-icon" style={{ fontSize: "30px", cursor: "pointer" }} />
            </Link>
            <Link
              to="/login"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PermIdentityIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Link>
            <Link
              to="/favorite"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FavoriteBorderIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Link>
            <ShopIcon
              onClick={hanldeToggleCart}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
            <div className="quantity">{quantity}</div>
            <div className="favo-quantity">{favoQuantity}</div>
          </div>
          <div className="mobile-menu">
            <MenuIcon style={{ fontSize: "32px" }} onClick={handleOpenMenu}/>
          </div>
          <div className={cart ? "header-cart open" : "header-cart"}>
            <Cart />
          </div>
        </div>
        <div className={cart ? "overlay" : ""} onClick={hanldeToggleCart}></div>
      </header>
    </>
  );
};

export default Header;
