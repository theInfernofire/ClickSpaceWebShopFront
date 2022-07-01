import { useState} from "react";
import axios from "../../data/api/axios";
import useUserContext from "../../data/context/useUserContext";
import { Link, useNavigate} from 'react-router-dom';
import './style.css';

const LOGIN_URL = '/api/User/LogIn';

const Login = () => {
    const { user,setUser } = useUserContext();
    const [userState, setUserState] = useState({});

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, { email: email, password: password },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            const token = response?.data?.token;
            setEmail('');
            setPassword('');
            setUser({ email: email, password: password, roles: ['User'], token: token });
            navigate("/cart");
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <header>            
                <a href="#"><img  src={require('../logo.jpg')} alt="Logo" id="logo"/></a>
                <ul id="categories">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Showcase</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>

                <div id="rightside">
                    <i class="fa-solid fa-basket-shopping" id="basket"></i>
                </div>
            </header>



            <div class="loginin">
                <label>Email</label>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                ></input><br />
                <label>Password</label>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                ></input><br/><br/>
                <button onClick={(e) => { handleSubmit(e) }}>Log in</button>
                <a><h3 class="faceb">f</h3></a>
                <p>
                    <label class="account">Need an Account?</label>
                    <span>
                        <Link to="/register"><h3>Sign up</h3></Link>
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
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Login;