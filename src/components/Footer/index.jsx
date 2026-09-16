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
        url: "https://www.ashishranjan.net",
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
        url: "https://facebook.com/theash.ashish",
        icon: FiFacebook,
    },
    {
        title: "YouTube",
        url: "https://youtube.com/@ashishranjan-ashz",
        icon: FiYoutube,
    },
];

const supportLinks = [
    {
        title: "Support",
        url: "https://a2rp-donation-page.netlify.app",
        icon: FiHeart,
    },
    {
        title: "Buy Me A Coffee",
        url: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    {
        title: "Buy Me a Coffee",
        url: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    {
        title: "Patreon",
        url: "https://patreon.com/a2rp",
        icon: FiGift,
    },
];

function Footer() {
    const year = new Date().getFullYear();

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
                    <div>
                        <h3>Quick Links</h3>

                        {quickLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.title}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon />

                                    <span>{item.title}</span>
                                </a>
                            );
                        })}
                    </div>

                    <div>
                        <h3>Support</h3>

                        {supportLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.title}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon />

                                    <span>{item.title}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="bottom">
                    <span>
                        &copy; {year}{" "}
                        <a href="https://www.ashishranjan.net" target="_blank" rel="noreferrer">
                            Ashish Ranjan
                        </a>{" "}
                        · MIT License
                    </span>

                    <button
                        type="button"
                        className="backToTop"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        Back to Top
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default Footer;
