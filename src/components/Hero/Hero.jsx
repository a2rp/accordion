import { FiArrowDown, FiCheckCircle, FiLayers, FiZap } from "react-icons/fi";

import { scrollToSection } from "../../utils/scroll";
import styles from "./Hero.module.css";

const stats = [
    { icon: FiZap, title: "Fast", text: "Lightweight" },
    { icon: FiLayers, title: "Reusable", text: "Easy integration" },
    { icon: FiCheckCircle, title: "Responsive", text: "Mobile ready" },
];

function Hero() {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.container}>
                <div className={styles.copy}>
                    <span className={styles.eyebrow}>React UI component</span>

                    <h1 id="hero-title">
                        Beautiful
                        <span>Accordion</span>
                    </h1>

                    <p>
                        A lightweight, responsive and reusable Accordion component
                        built with React. Perfect for FAQs, documentation, settings
                        pages and knowledge bases.
                    </p>

                    <button
                        type="button"
                        className={styles.demoButton}
                        onClick={() => scrollToSection("accordion")}
                    >
                        <span>View demo</span>
                        <FiArrowDown aria-hidden="true" />
                    </button>

                    <div className={styles.stats}>
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <article className={styles.stat} key={stat.title}>
                                    <Icon aria-hidden="true" />
                                    <span>
                                        <strong>{stat.title}</strong>
                                        <small>{stat.text}</small>
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.imageCard}>
                        <img
                            src={`${import.meta.env.BASE_URL}images/accordion-hero.jpg`}
                            alt="Modern architecture viewed through a glass roof"
                        />

                        <div className={`${styles.badge} ${styles.badgeTop}`}>
                            <FiLayers aria-hidden="true" />
                            <span>
                                <strong>Reusable</strong>
                                <small>Component</small>
                            </span>
                        </div>

                        <div className={`${styles.badge} ${styles.badgeBottom}`}>
                            <FiZap aria-hidden="true" />
                            <span>
                                <strong>Smooth</strong>
                                <small>Animation</small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
