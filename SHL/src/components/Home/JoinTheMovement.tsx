import { useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/JoinTheMovement.css";

const JoinTheMovement = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    const animateElement = (element: any) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const circle = entry.target;
            const title = circle.querySelector("h2");
            const paragraph = circle.querySelector("p");

            animateElement(title);
            animateElement(paragraph);
            observer.unobserve(circle);
          }
        });
      },
      { threshold: 0.5 }
    );

    circles.forEach((circle) => {
      observer.observe(circle);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="jointhemovement-wrapper">
      {/* Header */}
      <div className="header-wrapper">
        <h1 className="gradient">Join The Movement.</h1>
        <img src="/header-line.png" alt="idk" className="w-full" />
      </div>
      <div className="circles-wrapper">
        <div className="circle">
          <img
            src="/sponsor-circle.svg"
            className="absolute bottom-[-4rem] xl:bottom-[-5rem] scale-[1.6]"
            alt=""
          />
          <h2 className="gradient">Sponsor:</h2>
          <p className="text-white text-[0.8rem] xl:text-[1.25rem] 2xl:text-[1.65rem]">
            Sponsors are the <span className="text-purple">bedrock</span> of our
            organization. By{" "}
            <span className="text-blue">providing sponsorship</span>,
            <span className="text-purple">speakers</span>, or offering{" "}
            <span className="text-blue">educational resources</span> and{" "}
            <span className="text-purple">mentorship opportunities</span>, you{" "}
            <span className="text-blue">actively</span>{" "}
            <span className="text-purple">push</span> the{" "}
            <span className="text-blue">new</span>{" "}
            <span className="text-purple">generation</span> of{" "}
            <span className="text-purple">innovators</span> and{" "}
            <span className="bg-gradient-to-r from-[#B84CFF] to-[#73C0FE] bg-clip-text text-transparent underline">
              Fuel The Future
            </span>{" "}
            of tech.
          </p>
        </div>
        <div className="circle">
          <img
            src="/partner-circle.svg"
            className="absolute top-[-5rem] xl:top-[-9rem] scale-[1.5] xl:scale-[1.75] 2xl:scale-[1.5]"
            alt=""
          />
          <h2 className="text-blue w-fit text-[3.5rem]">Partner:</h2>
          <p className="text-white text-[0.8rem] xl:text-[1.25rem] 2xl:text-[1.65rem]">
            Partners play an <span className="text-purple">integral role</span>{" "}
            in our mission. By <span className="text-blue">hosting</span> a Star
            Hack Event, you <span className="text-purple">gain access</span> to
            a <span className="text-blue">unique</span>{" "}
            <span className="text-purple">ranking system</span>, receive
            customized <span className="text-purple">assistance</span> in{" "}
            <span className="text-blue">organizing</span> your event, and
            benefit from <span className="text-purple">tailor-made</span>{" "}
            <span className="text-blue">outreach</span>, all while helping{" "}
            <span className="bg-gradient-to-r from-[#B84CFF] to-[#73C0FE] bg-clip-text text-transparent underline ">
              Build A Connected Community.
            </span>
          </p>
        </div>
        <div className="circle">
          <img
            src="/compete-circle.svg"
            className="absolute bottom-[-2.5rem] xl:bottom-[-5rem] xl:left-[2rem] scale-[2] xl:scale-[2.25]"
            alt=""
          />
          <h2 className="text-purple w-fit text-[3.5rem]">Compete:</h2>
          <p className="text-white text-[0.8rem] xl:text-[1.25rem] 2xl:text-[1.65rem]">
            Participants <span className="text-purple">form</span> the{" "}
            <span className="text-blue">essence</span> of any event.{" "}
            <span className="text-purple">Engaging</span> in a Star{" "}
            <span className="text-blue">Hack Event</span> represents an{" "}
            <span className="text-purple">active</span>{" "}
            <span className="text-blue">contribution</span> to the{" "}
            <span className="text-purple">evolution</span> of{" "}
            <span className="text-blue">technology</span> among the new
            generation. Involvement in such an event connects you with a{" "}
            <span className="text-blue">community</span> of{" "}
            <span className="text-purple">developers</span>, simultaneously
            assisting you in{" "}
            <span className="gradient">Expanding Your Skillset.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinTheMovement;
