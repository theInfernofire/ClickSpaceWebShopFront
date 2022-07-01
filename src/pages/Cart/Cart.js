import { useEffect, useState } from "react"
import useAxiosPrivate from "../../data/api/axiosInterceptors"
import useUserContext from "../../data/context/useUserContext"
import CartList from "./CartList"
const CART_URL = '/GetCartProducts'


const Cart = () => {
    const { user } = useUserContext();
    const [cartList, setCartList] = useState({})
    const axiosPrivate = useAxiosPrivate();
    const [loading, setLoading] = useState(true);

    const asy = async () => {
        try {
            const response = await (await axiosPrivate.get(CART_URL)).data;
            setCartList(response);
            if (cartList != null) {
                setLoading(false);
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        asy();
    },[cartList,setCartList])

    return (
        <div>
            <header>
            
                <a href="#"><img src={require('../images/logo.jpg')} alt="Logo" id="logo"/></a>
                

                <ul id="categories">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Showcase</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>

                {/* <img src={require('../images/shopping-cart-20392.png')} alt="cart" id="cart"/> */}

                <div id="rightside">
                    <div>
                        <h4 id="fullname">Name Surname</h4>
                        <h4 id="email">{user.email}</h4>
                        <button id="logout">log out</button>
                    </div>
                    <img src={require('../images/profilecard.jpg')} alt="profilecard" id="profilecard"/>
                </div>
            </header>





        

            <div id="main_cart" >
                <h1 style={{display:"flex", alignItems: "center", justifyContent:"center"}}>{user.email}'s Cart:</h1><br/>
                {!loading && cartList.length > 0? <CartList items={cartList} /> : "Nothing in the cart"}
            </div>


            <div style={{display:"flex", alignItems: "center", justifyContent:"center",marginTop:"3rem",marginBottom:"6rem",marginLeft:"35rem",marginRight:"35rem",border:"solid 1px",padding:"1.5rem 1rem"}}>  

                <input type="text" placeholder="card Number" style={{marginLeft:"0.5rem",marginRight:"0.5rem",padding:"0.5rem 0.5rem"}}></input>

                <input type="date" placeholder="Expiration date" style={{marginLeft:"0.5rem",marginRight:"0.5rem",padding:"0.5rem 0.5rem"}}>

                </input><br></br>
                <input type="text" placeholder="Cvc Code" style={{marginLeft:"0.5rem",marginRight:"0.5rem",padding:"0.5rem 0.5rem"}}>

                </input><br></br>

                <button onClick="#" style={{marginLeft:"0.5rem",marginRight:"0.5rem",width: "3rem", height: "1.5rem", fontWeight: "bold", color: "white", padding: "2px 7px",
            backgroundColor: "rgb(40, 45, 46)", border: "none", borderRadius: "8px", cursor: "pointer", transition: "all 0.3 ease-in-out 0s"}}>Buy</button>

            </div>






            <footer class="footer">
                <div class="container">
                <div class="components">
                    <div class="column">
                        <h4>About Company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our service</a></li>
                            <li><a href="#">privecy policy</a></li>
                            <li><a href="#">Products</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Rrder status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h4>Online Shop</h4>
                        <ul>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Leptop</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h4>Follow Us</h4>
                        <ul class="Followus">
                            <a href="#"><img src={require('../images/584ac2d03ac3a570f94a666d.png')} alt="Facebook logo" id="facebook"/></a>
                            <a href="#"><img src={require('../images/580b57fcd9996e24bc43c521.png')} alt="Instagram logo" id="insta"/></a>
                        </ul>
                    </div>
                </div>
                </div>
            </footer>

        </div>
    )
}

export default Cart;