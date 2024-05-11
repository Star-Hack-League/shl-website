import { useEffect, useRef } from "react";
import gsap from "gsap";

const Link = ({
  text,
  icon,
  href,
}: {
  text: string;
  icon: string;
  href: string;
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;

    if (link) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                link,
                { opacity: 0, x: -100 },
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.5,
                  delay: 0.25,
                }
              );
              observer.unobserve(link);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(link);

      return () => {
        observer.unobserve(link);
      };
    }
  }, []);

  return (
    <a href={href ? href : "/"} className="link-wrapper link" ref={linkRef}>
      <img
        className="w-[3rem] md:w-[4rem] xl:w-[5rem]"
        src={icon ? icon : ""}
        alt="icon"
      />
      {text}
    </a>
  );
};

export default Link;
