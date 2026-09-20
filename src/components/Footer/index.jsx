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
                        <h3>Links</h3>

                        {quickLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.title}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                    rel="noopener noreferrer"
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
                        Copyright © {year}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                        <span className="license">MIT License</span>
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
