import React from "react";
import "./Footer.css";
import homepage from "./assets/footer/homepage.png";
import shoppingCart from "./assets/footer/shopping-cart.png";
import avatar from "./assets/footer/avatar.png";
import homepage2 from "./assets/footer/homepage2.png";
import shoppingCart2 from "./assets/footer/shopping-cart2.png";
import avatar2 from "./assets/footer/avatar2.png";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHomepage = () => {
    navigate("/home");
  };

  const goToCart = () => {
    navigate("/despesas");
  };

  const goToProfile = () => {
    navigate("/receitas");
  };

  const iconeAvatar1 = avatar;
  const iconeAvatar2 = avatar2;
  const iconeHomepage1 = homepage;
  const iconeHomepage2 = homepage2;
  const iconeShoppingCart1 = shoppingCart;
  const iconeShoppingCart2 = shoppingCart2;

  const changeIconHomeBasedOnLocation = (location) => {
    switch (location.pathname) {
      case "/home":
        return iconeHomepage2;
      default:
        return iconeHomepage1;
    }
  };

  const changeIconCartBasedOnLocation = (location) => {
    switch (location.pathname) {
      case "/despesas":
        return iconeShoppingCart2;
      default:
        return iconeShoppingCart1;
    }
  };

  const changeIconProfileBasedOnLocation = (location) => {
    switch (location.pathname) {
      case "/receitas":
        return iconeAvatar2;
      default:
        return iconeAvatar1;
    }
  };


  return (
    <div className="FooterCard">
      <div className="Item1">
  <div className="HomepageIcon" style={{ backgroundImage: `url(${changeIconHomeBasedOnLocation(location)})` }} onClick={goToHomepage} />Home
</div>
<div className="Item2">
  <div className="ShoppingCartIcon" style={{ backgroundImage: `url(${changeIconCartBasedOnLocation(location)})` }} onClick={goToCart} />Despesas
</div>
<div className="Item3">
  <div className="AvatarIcon" style={{ backgroundImage: `url(${changeIconProfileBasedOnLocation(location)})` }} onClick={goToProfile} />Receitas
</div>

    </div>
  );
};

export default Footer;