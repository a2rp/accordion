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

import { scrollToTop } from "../../utils/scroll";
import styles from "./Footer.module.css";

const links = [
    { label: "Portfolio", url: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", url: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", url: "https://codepen.io/ash1198", icon: FiCodepen },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/aashishranjan",
        icon: FiLinkedin,
    },
    {
        label: "Facebook",
        url: "https://www.facebook.com/theash.ashish/",
        icon: FiFacebook,
    },
    {
        label: "YouTube",
        url: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FiYoutube,
    },
    { label: "Email", url: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
];

const supportLinks = [
    {
        label: "Support",
        url: "https://a2rp-donation-page.netlify.app/",
        icon: FiHeart,
    },
    {
        label: "Buy Me a Coffee",
        url: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    { label: "Patreon", url: "https://patreon.com/a2rp", icon: FiGift },
];

function FooterLinks({ items }) {
    return (
        <div className={styles.iconLinks}>
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        title={item.label}
                    >
                        <Icon aria-hidden="true" />
                    </a>
                );
            })}
        </div>
    );
}

function Footer() {
    const [showTop, setShowTop] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        const updateTopButton = () => setShowTop(window.scrollY > 420);

        updateTopButton();
        window.addEventListener("scroll", updateTopButton, { passive: true });

        return () => window.removeEventListener("scroll", updateTopButton);
    }, []);

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <span className={styles.eyebrow}>React component</span>
                    <h2>Accordion</h2>
                    <p>
                        A clean, lightweight and reusable Accordion component built
                        with React and CSS Modules.
                    </p>
                </div>

                <div className={styles.groups}>
                    <div>
                        <h3>Links</h3>
                        <FooterLinks items={links} />
                    </div>
                    <div>
                        <h3>Support</h3>
                        <FooterLinks items={supportLinks} />
                    </div>
                </div>

                <div className={styles.bottom}>
                    Copyright &copy; {year}{" "}
                    <a
                        href="https://www.ashishranjan.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                    <span>MIT License</span>
                </div>
            </div>

            <button
                type="button"
                className={`${styles.topButton} ${showTop ? styles.visible : ""}`}
                onClick={scrollToTop}
                aria-label="Back to top"
                title="Back to top"
            >
                <FiArrowUp aria-hidden="true" />
            </button>
        </footer>
    );
}

export default Footer;
