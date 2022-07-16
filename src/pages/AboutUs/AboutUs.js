import React from 'react';
import ImageText from './components/ImageText';
import TextWithLeftImage from "./components/TextWithLeftImage";
import TextWithRightImage from "./components/TextWithRightImage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AboutUs() {
   return (
      <div>
         <Header />
         <div>
         <ImageText />
         <TextWithLeftImage />
         <TextWithRightImage />
         </div>
         <Footer />
      </div>
   )
}

export default AboutUs;