import { useState } from "react";
import axios from "../../data/api/axios";
import { Link, useNavigate} from 'react-router-dom';

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
            <label>First Name</label><br />
            <input
                type='text'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
            ></input><br /><br />
            <label>Last Name</label><br />
            <input
                type='text'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
            ></input><br /><br />
            <label>Phone Number</label><br />
            <input
                type='tel'
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                required
            ></input><br /><br />
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
            ></input><br /><br />
            <button onClick={(e) => { handleSubmit(e) }}>Register</button>
            <hr />
            <p>
                <label>Already have an account?</label><br />
                <span>
                    <Link to="/Login">Log in</Link>
                </span>
            </p>
        </div>
    )
}

export default Register;