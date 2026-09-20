import { FiActivity, FiCode, FiMonitor, FiShield } from "react-icons/fi";

import styles from "./Features.module.css";

const features = [
    {
        icon: FiCode,
        title: "Reusable",
        text: "Drop the component into any React project with minimal configuration.",
        image: "reusable-component.jpg",
    },
    {
        icon: FiActivity,
        title: "Smooth",
        text: "Lightweight expand and collapse animation for a polished experience.",
        image: "smooth-transitions.jpg",
    },
    {
        icon: FiMonitor,
        title: "Responsive",
        text: "A comfortable experience across desktop, tablet and mobile devices.",
        image: "responsive-layout.jpg",
    },
    {
        icon: FiShield,
        title: "Accessible",
        text: "Semantic controls with clear states and keyboard-friendly interaction.",
        image: "accessible-controls.jpg",
    },
];

function Features() {
    return (
        <section className={styles.features} id="features" aria-labelledby="features-title">
            <div className={styles.container}>
                <span className={styles.eyebrow}>Features</span>
                <h2 id="features-title">Designed to be simple, reusable and elegant.</h2>

                <div className={styles.grid}>
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article className={styles.card} key={feature.title}>
                                <img
                                    src={`${import.meta.env.BASE_URL}images/${feature.image}`}
                                    alt={`${feature.title} feature visual`}
                                    loading="lazy"
                                />
                                <span className={styles.icon}>
                                    <Icon aria-hidden="true" />
                                </span>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Features;
