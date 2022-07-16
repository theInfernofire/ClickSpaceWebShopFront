import fb from "./584ac2d03ac3a570f94a666d.png";
import ig from "./580b57fcd9996e24bc43c521.png";
import shoppingCart from "./shopping-cart-20392.png";
import product from "./phone_2.jpg"
import logo from "./logo.jpg";
import "./style.scss";
import useUserContext from "../../data/context/useUserContext";
import { Link, useNavigate } from "react-router-dom";
import ChatBox from "../Product page accounted/FBChat";

const PHONE_ID = 7;
const CART_URL = ""

const Product = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    const notLoggedIn = () => {
        alert("You must be logged in to buy");
    }

    return (
        <div>
            <header>
                <a href="#"><img src={logo} alt="Logo" id="logo" /></a>


                <ul id="categories">
                    <li><a href="http://localhost:3000/product">Home</a></li>
                    <li><a href="http://localhost:3000/aboutus">About</a></li>
                    <li><a href="http://localhost:3000/unaothorized">Services</a></li>
                    <li><a href="http://localhost:3000/product">Showcase</a></li>
                    <li><a href="http://localhost:3000/unaothorized">Blog</a></li>
                </ul>

                <img src={shoppingCart} alt="cart" id="cart" onClick={() => { notLoggedIn() }} />

                <div id="rightside">
                    <div id="reglog">
                        <button id="regbutton2"><Link to="/register" id="regbutton">Register</Link></button>
                        <button id="logbutton2"><Link to="/register" id="logbutton">Log In</Link></button>
                    </div>
                </div>
            </header>

            <div className="product_showcase">
                <div class="imagephone">
                    <img src={product} alt="Logo" className="phone" />
                </div>
                <div className="sidetext">
                    <h2 id="name">
                        Nokia G11 Plus
                    </h2>
                    <p id="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    </p>
                    <div class="price">
                        <button onClick={() => { notLoggedIn() }}>Add to basket</button>
                        <h3>439.99$</h3>
                    </div>
                </div>



            </div>
            <div className="fbchat">
                <ChatBox />
            </div>

            <footer class="footer">
                <div class="container">
                    <div class="components">
                        <div className="column">
                            <h4>About Company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our service</a></li>
                                <li><a href="#">privecy policy</a></li>
                                <li><a href="#">Products</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="https://www.freightcenter.com/shipping-companies">shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Rrder status</a></li>
                                <li><a href="https://payze.ge/">payment options</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Phone</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Leptop</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h4>Follow Us</h4>
                            <ul class="Followus">
                                <a href="#"><img src={fb} alt="Facebook logo" id="facebook" /></a>
                                <a href="#"><img src={ig} alt="Instagram logo" id="insta" /></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    );
}

export default Product;