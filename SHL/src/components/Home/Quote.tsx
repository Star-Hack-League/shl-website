import "../../styles/Quote.css";
import "animate.css";
import { useState, useEffect } from "react";

function Quote() {

    const [scrollTitle, setScrollTitle] = useState(false);
    const [scrollElt, setScrollElt] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTitle(window.scrollY >= 0.2 * window.innerHeight);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrollElt(window.scrollY >= 0.2 * window.innerHeight);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <div className="quote-container">
                <img className={scrollTitle ? "animate__animated animate__fadeInUp" : "hide"} id="quote-bot" src="/quotes.png" alt="" />
                <img className={scrollTitle ? "animate__animated animate__fadeInUp" : "hide"} id="quote-top" src="/quotes.png" alt="" />
                <p className={scrollTitle ? "quote-content animate__animated animate__fadeInUp" : "hide"}>
                    <span className="text-purple">Star Hack </span>
                    is
                    <span className="text-blue"> more </span>
                    than
                    <span className="text-purple"> just a </span>
                    <span className="text-blue"> platform </span>
                    – it's a
                    <span className="text-purple"> community</span>
                    .  We carefully
                    <span className="text-blue"> curate </span>
                    <span className="text-purple"> hackathons </span>
                    that
                    <span className="text-blue"> align </span>
                    with our sponsors'
                    <span className="text-purple"> values</span>
                    ,  ensuring
                    <span className="text-blue"> meaningful </span>
                    <span className="text-purple"> partnerships </span>
                    that drive
                    <span className="text-blue"> positive </span>
                    <span className="text-purple"> change </span>
                    within the
                    <span className="text-blue"> tech industry </span>
                    and
                    <span className="text-gradient"> beyond</span>.
                </p>
                <p className={scrollElt ? "author animate__animated animate__fadeInUp animate__delay-1s" : "author hide"}>
                    -Shaan Yu
                    Co-Founder @ Star Hack
                </p>
            </div >
        </>
    );
}

export default Quote;
