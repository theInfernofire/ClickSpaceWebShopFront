import React from 'react';
import Building from "./images/building.jpg"
import './styles/MainStyle.css'
import './styles/ImageText.css'

export default function Test() {
   return (
      <section className="about1">
         <div className="main1">
            <img src={Building}/>
            <div className="text">
               <h4>Leadership & Mission</h4>
               <h1>Our mission & values</h1>
               <p>Our promise to perform responsibly as a leading, global company.</p>
            </div>
         </div>
      </section>
   )
}