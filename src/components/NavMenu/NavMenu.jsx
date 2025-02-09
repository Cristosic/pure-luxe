import React from "react";
import styles from "./NavMenu.module.scss";
import logo from "../../media/logo/logo.svg";
import { NavLink } from "react-router-dom";
import searchIcon from "../../media/icons/searchIcon.svg";
import cartIcon from "../../media/icons/cartIcon.svg";
import heartIcon from "../../media/icons/heartIcon.svg";
import userIcon from "../../media/icons/userIcon.svg";

export default function NavMenu() {
  return (
    <nav>
      <div className={styles.navMenu}>
        <div className={styles.navMenu__left}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navMenu__center}>
          <div className={styles.navMenu__center__links}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/categories">Categories</NavLink>
          </div>
        </div>
        <div className={styles.navMenu__right}>
          <div className={styles.navMenu__right__icons}>
            <img src={searchIcon} alt="search icon" />
            <NavLink to="/wish-list">
              <img src={heartIcon} alt="heart icon" />
            </NavLink>
            <NavLink to="/cart">
              <img src={cartIcon} alt="cart icon" />
            </NavLink>
            <NavLink to="/my-account">
              <img src={userIcon} alt="user icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
