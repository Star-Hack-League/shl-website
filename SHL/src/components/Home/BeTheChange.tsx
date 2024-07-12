import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/BeTheChange.css";
import Link from "./SocialLink";

const BeTheChange = () => {
	const headerRef = useRef<HTMLHeadingElement>(null);
	const blurRef = useRef<HTMLHeadingElement>(null);
	const subHeaderRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const header = headerRef.current;
		const blur = blurRef.current;
		const subHeader = subHeaderRef.current;

		const animateElement = (element: HTMLElement) => {
			gsap.fromTo(
				element,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					delay: 0.25,
				}
			);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateElement(entry.target as HTMLElement);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (header) {
			observer.observe(header);
		}

		if (blur) {
			observer.observe(blur);
		}

		if (subHeader) {
			observer.observe(subHeader);
		}

		return () => {
			if (header) {
				observer.unobserve(header);
			}
			if (blur) {
				observer.unobserve(blur);
			}
			if (subHeader) {
				observer.unobserve(subHeader);
			}
		};
	}, []);

	return (
		<>
			<div className="bethechange-wrapper">
				<img src="/waveDivider.png" alt="" className="wave-divider" />
				<div className="bethechange-inner-wrapper">
					{/* Assign ref to the header */}
					<h1 className="bethechange-header" ref={headerRef}>
						Be the change.
					</h1>
					{/* Blur */}
					<h1 className="blur" ref={blurRef}>
						Be the change
					</h1>
					<p className="sub-header" ref={subHeaderRef}>
						Join our mission and help{" "}
						<span className="gradient">Fuel The Future</span> of{" "}
						<span className="blue">Technology</span>.
					</p>
					{/* Links */}
					<div className="links-wrapper">
						<Link
							text="Contact@Starhack.Tech"
							icon="/email.svg"
							href="mailto:contact@starhack.tech"
						/>
						<Link
							text="@starhackalliance"
							icon="/insta.svg"
							href="https://www.instagram.com/starhackalliance"
						/>
						<Link
							text="@starhackleague"
							icon="/youtube.svg"
							href="https://www.youtube.com/@starhackleague"
						/>
						<Link
							text="@starhackalliance"
							icon="/tiktok.svg"
							href="https://www.tiktok.com/@starhackalliance"
						/>
						<Link
							text="https://discord.gg/Gt5NcAb587"
							icon="/discord.svg"
							href="https://discord.gg/Gt5NcAb587"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default BeTheChange;
