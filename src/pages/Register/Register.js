import { useState } from "react";
import axios from "../../data/api/axios";
import { Link, useNavigate} from 'react-router-dom';
import './style.css';

const REGISTER_URL = "/api/User/Register"

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(REGISTER_URL,
                {
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    email: email,
                    password: password
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            setEmail('');
            setFirstName('');
            setLastName('');
            setPassword('');
            setPhoneNumber('');
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <header>
                <a href="#"><img  src={require('../images/logo.jpg')} alt="Logo" id="logo"/></a>

                <ul id="categories">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Showcase</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>

                <div id="rightside">
                    <i class="fa-solid fa-basket-shopping" id="basket"></i>
                    <div id="reglog">
                        <button onclick="register()" id="regbutton">Register</button>
                        <button onclick="login()" id="logbutton">Login</button>
                    </div>
                </div>
            </header>

            
            <div class="register">
                <label>First Name</label><br />
                <input
                    type='text'
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                ></input><br />
                <label>Last Name</label><br />
                <input
                    type='text'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                ></input><br />
                <label>Phone Number</label><br />
                <input
                    type='tel'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    required
                ></input><br />
                <label>Email</label><br />
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                ></input><br />
                <label>Password</label><br />
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                ></input><br />
                <button onClick={(e) => { handleSubmit(e) }}>Register</button>
                <hr />
                <p>
                    <label>Already have an account?</label>
                    <span>
                        <Link to="/Login">Sign in</Link>
                    </span>
                </p>
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
                    <a href="#"><img src={require("../images/584ac2d03ac3a570f94a666d.png")} alt="Facebook logo" id="facebook"/></a>
                    <a href="#"><img src={require("../images/580b57fcd9996e24bc43c521.png")} alt="Instagram logo" id="insta"/></a>
                 </ul>
              </div>
           </div>
        </div>
     </footer>
        </div>
    )
}

export default Register;