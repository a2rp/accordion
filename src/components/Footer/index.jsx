import { useEffect, useState } from "react";
import {
    FiArrowUp,
    FiCodepen,
    FiCoffee,
    FiFacebook,
    FiGift,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const quickLinks = [
    {
        title: "Portfolio",
        url: "https://www.ashishranjan.net/",
        icon: FiGlobe,
    },
    {
        title: "GitHub",
        url: "https://github.com/a2rp",
        icon: FiGithub,
    },
    {
        title: "CodePen",
        url: "https://codepen.io/ash1198",
        icon: FiCodepen,
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/aashishranjan",
        icon: FiLinkedin,
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/theash.ashish/",
        icon: FiFacebook,
    },
    {
        title: "YouTube",
        url: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FiYoutube,
    },
    {
        title: "Email",
        url: "mailto:ash.ranjan09@gmail.com",
        icon: FiMail,
    },
];

const supportLinks = [
    {
        title: "Support",
        url: "https://a2rp-donation-page.netlify.app/",
        icon: FiHeart,
    },
    {
        title: "Buy Me a Coffee",
        url: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    {
        title: "Patreon",
        url: "https://www.patreon.com/a2rp",
        icon: FiGift,
    },
];

function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 420);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderIconLinks = (links) =>
        links.map((item) => {
            const Icon = item.icon;

            return (
                <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                    title={item.title}
                >
                    <Icon aria-hidden="true" />
                </a>
            );
        });

    return (
        <Styled.Wrapper>
            <div className="container">
                <div className="intro">
                    <span className="eyebrow">React Component</span>

                    <h2>Accordion</h2>

                    <p>
                        A clean, lightweight and reusable Accordion component
                        built with React and styled-components.
                    </p>
                </div>

                <div className="linksWrapper">
                    <div className="linkGroup">
                        <h3>Links</h3>
                        <div className="iconLinks">{renderIconLinks(quickLinks)}</div>
                    </div>

                    <div className="linkGroup">
                        <h3>Support</h3>
                        <div className="iconLinks">{renderIconLinks(supportLinks)}</div>
                    </div>
                </div>

                <div className="bottom">
                    <span>
                        Copyright &copy; {year}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                        <span className="license">MIT License</span>
                    </span>
                </div>
            </div>

            <button
                type="button"
                className={`backToTop${showBackToTop ? " visible" : ""}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                title="Back to top"
            >
                <FiArrowUp aria-hidden="true" />
            </button>
        </Styled.Wrapper>
    );
}

export default Footer;
