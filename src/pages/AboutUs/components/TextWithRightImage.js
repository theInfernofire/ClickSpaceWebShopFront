import React from 'react';
import People from "./images/people.jpg"
import "./styles/MainStyle.css"
import "./styles/TextWithRightImage.css"

export default function TextWithRightImage() {
    return (
        <section class="about3">
            <div class="main3">
                <div class="all_text">
                    <h1>contact information</h1>
                    <ul>
                        <li>Phone: (+995) 555 111 222</li>
                        <li>Address: 221B Baker Street</li>
                        <li>Email: test.tester@gmail.com</li>
                        

                    </ul>
                    <div class="btn">
                        <button type="button">Our Team</button>
                        <button type="button" class="btn2">Learn More</button>
                    </div>
                </div>
                <img src={People}/>
            </div>
        </section>
    )
}