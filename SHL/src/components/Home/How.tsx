import "../../styles/How.css";
import "animate.css";
import { useState, useEffect } from "react";


function How() {

    const [scrollTitle, setScrollTitle] = useState(false);
    const [scrollElt, setScrollElt] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTitle(window.scrollY >= 1.2 * window.innerHeight);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrollElt(window.scrollY >= 1.5 * window.innerHeight);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div className="how-container">
            <h1 className={scrollTitle ? "title animate__animated animate__fadeInUp" : "title hide"}>Here's <span className="how-text-gradient">&nbsp;How</span></h1>
            <div className="card-container">
                <div className={scrollElt ? "how-card tilt-left card-top animate__animated animate__fadeInUp animate__delay-2s" : "how-card tilt-left card-top hide"}>
                    <h2 className="sub-title how-text-gradient">Connect:</h2>
                    <p className="card-text">We <span className="how-text-purple">cultivate </span> a  <span className="how-text-blue">vibrant network </span> of <span className="how-text-purple">innovators</span>, <span className="how-text-blue">mentors</span>, and  <span className="how-text-purple">industry leaders</span>, creating  <span className="how-text-blue">opportunities </span> for  <span className="how-content-gradient">meaningful</span>  <span className="how-content-gradient">exchange and</span>  <span className="how-content-gradient">growth</span>.</p>
                </div>
                <div className={scrollElt ? "how-card tilt-right card-mid animate__animated animate__fadeInUp animate__delay-1s" : "how-card tilt-right card-top hide"}>
                    <h2 className="sub-title how-text-gradient">Event:</h2>
                    <p className="card-text">We strive to <span className="how-text-blue">Advance </span> <span className="how-text-purple">Education </span> through <span className="how-text-blue">Tailored </span> <span className="how-text-purple">Events </span> that <span className="how-text-blue">Foster </span> <span className="how-text-purple">Curiosity</span>,  <span className="how-text-blue">Critical </span> <span className="how-text-purple">Thinking</span>, and  <span className="how-text-blue">Skill </span> <span className="how-text-purple">Development </span> <span className="how-content-gradient">Beyond </span> <span className="how-text-blue">Traditional </span> <span className="how-text-purple"> Academics</span>.</p>
                </div>
                <div className={scrollElt ? "how-card tilt-left card-bot animate__animated animate__fadeInUp" : "how-card tilt-left card-top hide"}>
                    <h2 className="sub-title how-text-gradient">Support:</h2>
                    <p className="card-text">We <span className="how-content-gradient"> Empower </span> <span className="how-text-blue">Event </span> <span className="how-text-purple">Organizers </span> by providing <span className="how-text-blue">Personalized </span> <span className="how-text-purple">Support</span>, fostering <span className="how-text-blue">Invaluable </span> <span className="how-text-purple">Experiences</span>, incentivizing <span className="how-text-blue">Sustainable </span> and <span className="how-text-purple">Futuristic Development</span>, and <span className="how-text-blue">Paving </span> the <span className="how-text-purple">Way </span> to a <span className="how-content-gradient">Better Future</span>.</p>
                </div>
            </div>
        </div>
    );
}


export default How;
