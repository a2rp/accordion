import { useEffect, useState } from "react";
import { FiGithub, FiList } from "react-icons/fi";

import { Styled } from "./styled";

function Header() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 24 || currentScrollY < previousScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > previousScrollY + 4) {
                setIsVisible(false);
            }

            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Styled.Wrapper $isVisible={isVisible}>
            <div className="container">
                <a className="brand" href="#top">
                    <span className="logo">
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt=""
                        />
                    </span>

                    <div className="brandContent">
                        <span className="eyebrow">a2rp</span>
                        <h1>Accordion</h1>
                    </div>
                </a>

                <nav className="navigation" aria-label="Primary navigation">
                    <a className="demoLink" href="#accordion">
                        <FiList aria-hidden="true" />
                        <span>View demo</span>
                    </a>

                    <a
                        className="githubButton"
                        href="https://github.com/a2rp/accordion"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open the Accordion repository on GitHub"
                    >
                        <FiGithub aria-hidden="true" />
                    </a>
                </nav>
            </div>
        </Styled.Wrapper>
    );
}

export default Header;
