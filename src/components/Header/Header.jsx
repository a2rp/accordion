import { useEffect, useState } from "react";
import { FiGithub, FiList, FiMenu, FiX } from "react-icons/fi";

import { scrollToSection, scrollToTop } from "../../utils/scroll";
import styles from "./Header.module.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);

    useEffect(() => {
        const closeWithEscape = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", closeWithEscape);

        return () => window.removeEventListener("keydown", closeWithEscape);
    }, []);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const updateHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 16 || currentScrollY < previousScrollY) {
                setHeaderVisible(true);
            } else if (currentScrollY > previousScrollY) {
                setHeaderVisible(false);
            }

            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateHeader, { passive: true });

        return () => window.removeEventListener("scroll", updateHeader);
    }, []);

    const handleSectionClick = (event, sectionId) => {
        event.preventDefault();
        setMenuOpen(false);

        if (sectionId === "top") {
            scrollToTop();
            return;
        }

        scrollToSection(sectionId);
    };

    return (
        <header
            className={`${styles.header} ${
                headerVisible ? styles.visible : styles.hidden
            }`}
        >
            <div className={styles.inner}>
                <a
                    className={styles.brand}
                    href="#top"
                    onClick={(event) => handleSectionClick(event, "top")}
                >
                    <span className={styles.logo}>
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
                    </span>

                    <span className={styles.brandText}>
                        <span className={styles.eyebrow}>a2rp</span>
                        <strong>Accordion</strong>
                    </span>
                </a>

                <nav className={styles.navigation} aria-label="Primary navigation">
                    <a
                        className={`${styles.actionLink} ${styles.demoLink}`}
                        href="#accordion"
                        onClick={(event) => handleSectionClick(event, "accordion")}
                    >
                        <FiList aria-hidden="true" />
                        <span>View demo</span>
                    </a>

                    <a
                        className={styles.iconLink}
                        href="https://github.com/a2rp/accordion"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open the Accordion repository on GitHub"
                        title="GitHub"
                    >
                        <FiGithub aria-hidden="true" />
                    </a>

                    <button
                        type="button"
                        className={`${styles.actionLink} ${styles.menuButton}`}
                        onClick={() => setMenuOpen((current) => !current)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                        <span>Menu</span>
                    </button>
                </nav>

                {menuOpen && (
                    <div className={styles.mobileMenu} id="mobile-menu">
                        <a
                            href="#top"
                            onClick={(event) => handleSectionClick(event, "top")}
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            onClick={(event) => handleSectionClick(event, "features")}
                        >
                            Features
                        </a>
                        <a
                            href="#accordion"
                            onClick={(event) => handleSectionClick(event, "accordion")}
                        >
                            Accordion
                        </a>
                        <a
                            href="#footer"
                            onClick={(event) => handleSectionClick(event, "footer")}
                        >
                            Support
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
