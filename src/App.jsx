import React from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Programs from "./Components/Programs/programs";
import Title from "./Components/Titile/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contacts from "./Components/Contact/Contacts";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer"/>
        <Programs/>
        <About/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title='What Student Says' />
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contacts/>
        <Footer/>
      </div>
      
    </div>
  )
}


export default App     