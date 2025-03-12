import React from 'react';
import './About.css';


const About = () => {
  console.log("About component rendered");
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our e-shop! We offer a wide range of products to meet all your needs.</p>
      <p>Our mission is to provide the best shopping experience for our customers.</p>
      <p>Our vision is to be the number one online store in the world.</p>
    </div>
  );
}

export default About;
