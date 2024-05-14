import React from 'react';
import ScrollSnap from 'scroll-snap';
import '../styles/LandingDhruv.css';
import LandingSection from '../components/Landing/LandingSection';
import backgroundImage from "/images/background.png"; 
import landingImage2 from "/images/landing_image2.png";
import TopNav from '../components/TopNav';
import FooterDhruv from '../components/FooterDhruv';
import crown from '/images/crown.png';
import pins from '/images/pins.png';
import plane from '/images/plane.png';
import button from '/images/button.png';
import 'animate.css/animate.min.css';
import 'animate.css';

function callback() {
 console.log('snapped');
}

class Landing extends React.Component {
 constructor(props) {
   super(props);
   this.container = React.createRef();
 }

 bindScrollSnap() {
   const element = this.container.current;
   const snapElement = new ScrollSnap(element, {
     snapDestinationY: '100%',
   });
   snapElement.bind(callback);
 }

 componentDidMount() {
   this.bindScrollSnap();
 }

 render() {
    return (
      <div id="container" ref={this.container}>
        <div className="page first-page">
          <div className="landing-section-container">
          <TopNav />

            <center>
            <h1 className='heading'>
            The <div className='next-text-gradient animate__animated animate__fadeIn animate__slow'>Alliance</div> of 
          <br/>Hackathons </h1>
            </center>

            <LandingSection image={backgroundImage} />
            <img className="landing-image" src={landingImage2} alt="Landing Image 2" />
            <img className="crown animate__animated animate__bounceInUp animate__slow" src={crown} alt="Crown" />
          </div>
        </div>
        <div className="page second-page">
  <div className="second-page-container">
    <div className="second-page-text">
      <h1 className='heading'> Bring your event to the</h1> <br />
      <div className='next-text-gradient '>NEXT LEVEL <br /> </div>
      <p className='paragraph'>
        Elevate your event with our connected<br /> 
        network of industry experts and sponsors.
      </p>
    </div>
    <img src={pins} alt="Pins" />
  </div>
</div>

        <div className="page third-page">
        <div className="second-page-container">
    <div className="second-page-text">
      <h1 className='heading'>Soar to<div className='next-text-gradient '>&nbsp;NEW HEIGHTS </div> </h1> <br />
      <p className='paragraph'>
      Gain Next-Level Event Support Tailored to<br /> 
      Your Needs.
      </p>
    </div>
    <img className='plane' src={plane} alt="Plane" />
    <img className='button' src={button}/>
  </div>
        </div>
        <div className="page fourth-page">4</div>
        <div className="page fifth-page">5
        <FooterDhruv
        />
        </div>
      </div>
    );
  }
}

export default Landing;


// import React from "react";
// import { useRef } from "react";
// import Mysection from "../components/Landing/LandingSection";
// import styles from "../styles/Home.module.scss";
// import backgroundImage from "../../../SHL/public/background.png"; 

// export default function Home() {
//     const section1 = useRef();
//     const section2 = useRef();
//     const section3 = useRef();
//     function scrollTo(section) {
//       section.current.scrollIntoView({ behavior: "smooth" });
//     }
//     return (
//       <div>
//         <div className={`container ${styles.container}`}>
//           <div ref={section1}>
//             <Mysection
//               image={backgroundImage}
//               headline={`Lorem Ipsum Dolor Sit Amet`}
//             />
//           </div>
//           <div ref={section2}>
//             <Mysection
//               image={backgroundImage}
//               headline={`Lorem Ipsum Dolor Sit Amet`}
//             />
//           </div>
//           <div ref={section3}>
//             <Mysection
//               image={backgroundImage}
//               headline={`Lorem Ipsum Dolor Sit Amet`}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }

// import React from "react";
// import backgroundImage from "../../../SHL/public/background.png"; 
// import landingImage2 from "../../../SHL/public/landing_image2.png";


// function NotFound() {
//     return (
//         <div style={{ 
//           backgroundImage: `url(${backgroundImage})`, 
//           backgroundColor: 'black', 
//           width: '100vw', 
//           height: '100vh', 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           position: 'relative', // Add position relative to the parent div
//         }}>
//           {/* Container for the landing image */}
//           <div style={{

//         }}>
//             <img src={landingImage2} alt="Landing Image 2" style={{ width: '100%', height: '100%' }} />
//           </div>
//         </div>
//       );
//     }

// export default NotFound;
