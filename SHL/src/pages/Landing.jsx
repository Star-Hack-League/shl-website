import React from 'react';
import ScrollSnap from 'scroll-snap';
import '../styles/LandingDhruv.css';
import LandingSection from '../components/Landing/LandingSection';
import backgroundImage from "/images/background.png"; 
import landingImage2 from "/images/landing_image2.png";
import crown from '/images/crown.png';
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
            <LandingSection image={backgroundImage} />
            <img className="landing-image" src={landingImage2} alt="Landing Image 2" />
            <img className="crown animate__animated animate__bounceInUp animate__slow" src={crown} alt="Crown" />
          </div>
        </div>
        <div className="page second-page">2</div>
        <div className="page third-page">3</div>
        <div className="page fourth-page">4</div>
        <div className="page fifth-page">5</div>
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