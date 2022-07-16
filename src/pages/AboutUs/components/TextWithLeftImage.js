import React from 'react';
import Products from "./images/products.jpg"
import "./styles/MainStyle.css"
import "./styles/TextWithLeftImage.css"

export default function TextWithLeftImage() {
    return (
        <section className="about2">
        <div className="main2">
            <img src={Products}/>
            <div className="all_text">
                <h4>About Us</h4>
                <h1>Our mission & values</h1>
                <p>
                    Samsung is committed to complying with local laws and regulations as well as applying 
                    a strict global code of conduct to all employees. It believes that ethical management 
                    is not only a tool for responding to the rapid changes in the global business environment, 
                    but also a vehicle for building trust with its various stakeholders including customers, 
                    shareholders, employees, business partners and local communities. With an aim to become one 
                    of the most ethical companies in the world, Samsung continues to train its employees and 
                    operate monitoring systems, while practicing fair and transparent corporate management.
                </p>
                <div className="btn">
                    <button type="button">Our Team</button>
                    <button type="button" className="btn2">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    )
}