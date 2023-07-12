import React from 'react';
import './Home.css';
import graphImage from './graph.jpg';
//import { HiLocationMarker } from 'react-icons/hi';
//import CountUp from 'react-countup';

export const Home = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle"></div> */}
            <h1>Welcome,<br/>bluncky's 3.0<br/>Service center</h1>
          </div>
          <div className="btn-star">
            <button>Get Started</button>
          </div>
          <div className="flexColStart hero-des">
            <span>Experience the difference of professional care for your appliances.</span>
            <span> Trust our experts to keep things running smoothly.</span>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src={graphImage} alt="work" />
          </div>
        </div>

      </div>
    </section>
  );
};
export default Home;