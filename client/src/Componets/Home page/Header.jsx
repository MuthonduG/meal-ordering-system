import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import "./Header.css";

function Header() {
  return (
    <div className='header-container'>
        <div className="header-wrapper">
            <div className="header_top">
                <div className="delivery">
                    <TbTruckDelivery className="header_top-icon"/>
                    <h3>Free delivery around campus</h3>
                </div>

                <div className="location">
                    <FaMapLocationDot className="header_top-icon"/>
                    <h3>Sironi Restaurant USIU-Africa</h3>
                </div>

                <div className="header_socials">
                    <FaFacebookSquare className="header_top-icon"/>
                    <FaInstagramSquare className="header_top-icon"/>
                    <FaSquareXTwitter className="header_top-icon"/>
                </div>
            </div>
        </div>

        <div className="header_navbar">
            <div className="nav_logo">
                <img src="/images/logo.png" alt="" className='logo_img'/>
                <h1><span className='logo-text'>Speedy</span>serv</h1>
            </div>

            <div className="nav_right">
                    <ul className="header_links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                <div className="nav_buttons">
                    <div className="cart_icon">
                        <TiShoppingCart className='nav_icon'/>
                    </div>
                    <button className='nav_btn'>
                        <span>SignIn</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="header_content">
            <div className="content_left">
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>

                <h1 className="header_title">Make an order of your favorite food</h1>
                <p>Save time by ordering your favorite food from anywhere around campus</p>
            </div>

            <div className="content_right">
                <img src="" alt="" />
                <div className="empty_left"></div>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Header;