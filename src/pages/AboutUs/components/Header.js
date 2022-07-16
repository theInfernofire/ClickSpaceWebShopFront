import React from 'react';
import Logo from '../../images/Samsung-Symbol.png';
import './styles/MainStyle.css'
import './styles/Header.css'


export default function Header() {
   return (
    <div className="header">
        <header>
            <img className="logo" src={Logo} />
            <nav>
                <ul className="nav_links">
                    <li><a href="file:///D:/reactProjects/signin_register/src/pages/Homepage/home.html">Home</a></li>
                    <li><a href="http://localhost:3000/aboutus">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="file:///D:/reactProjects/signin_register/src/pages/AllProductsPage/index.html">Showcase</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
            <div className="btn">
                <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
                <a href=""><i className="fa-solid fa-user"></i></a>
            </div>
        </header>
    </div>
      
   )
}