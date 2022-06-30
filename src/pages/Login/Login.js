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
        <div class="loginin">
            <label>Email</label><br />
            <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            ></input><br /><br />
            <label>Password</label><br />
            <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            ></input><br/><br/>
            <button onClick={(e) => { handleSubmit(e) }}>Log in</button>
            <hr />
            <p>
                <label>Need an Account?</label><br/>
                <span>
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </div>
    )
}

export default Login;