import fb from "./584ac2d03ac3a570f94a666d.png";
import ig from "./580b57fcd9996e24bc43c521.png";
import shoppingCart from "./shopping-cart-20392.png";
import product from "./phone_2.jpg"
import logo from "./logo.jpg";
import "./style.scss";
import useUserContext from "../../data/context/useUserContext";
import { Link, useNavigate } from "react-router-dom";
import ChatBox from "./FBChat";
import useAxiosPrivate from "../../data/api/axiosInterceptors";

const CART_URL = "/AddInCart"

const ProductLogged = () => {
    const axiosPrivate = useAxiosPrivate();
    const { user } = useUserContext();
    const navigate = useNavigate();

    const addToCart = async (n) => {
        const response = await axiosPrivate.post(CART_URL + "?productId="+n);
        alert("product added to cart");
    }

    return (
        <div>
            <header>
                <a href="#"><img src={logo} alt="Logo" id="logo" /></a>


                <ul id="categories">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Showcase</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>

                <img src={shoppingCart} alt="cart" id="cart" onClick={() => { navigate("/cart") }} />

                <div id="rightside">
                    <div id="reglog">
                        <h2>{user.email}</h2><br/>
                        <button id="logbutton2" onClick={() => { navigate("/login") }}><Link to="/login" id="logbutton">Log out</Link></button>
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
                        <button onClick={() => { addToCart(7) }}>Add to basket</button>
                        <h3>439.99$</h3>
                    </div>
                </div>

                <div class="imagephone">
                    <img src={product} alt="Logo" className="phone" />
                </div>
                <div className="sidetext">
                    <h2 id="name">
                        Nokia G21 Plus
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
                        <button onClick={() => { addToCart(1) }}>Add to basket</button>
                        <h3>4439.99$</h3>
                    </div>
                </div>
                



            </div>
            <div className="fbchat">
                <ChatBox/>
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
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Rrder status</a></li>
                                <li><a href="#">payment options</a></li>
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

export default ProductLogged;