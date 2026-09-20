import { FiActivity, FiCode, FiMonitor, FiShield } from "react-icons/fi";

import { Styled } from "./styled";

const features = [
    {
        icon: FiCode,
        title: "Reusable",
        description:
            "Drop the component into any React project with minimal configuration.",
        image: "reusable-component.jpg",
    },
    {
        icon: FiActivity,
        title: "Smooth",
        description:
            "Lightweight expand and collapse animation for a polished experience.",
        image: "smooth-transitions.jpg",
    },
    {
        icon: FiMonitor,
        title: "Responsive",
        description: "Looks great across desktop, tablet and mobile devices.",
        image: "responsive-layout.jpg",
    },
    {
        icon: FiShield,
        title: "Accessible",
        description:
            "Built with semantic HTML and keyboard friendly interactions.",
        image: "accessible-controls.jpg",
    },
];

function Features() {
    return (
        <Styled.Wrapper>
            <div className="container">
                <span className="eyebrow">Features</span>

                <h2>Designed to be simple, reusable and elegant.</h2>

                <div className="grid">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article key={feature.title} className="card">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/${feature.image}`}
                                    alt={`${feature.title} feature visual`}
                                    loading="lazy"
                                />
                                <div className="icon">
                                    <Icon />
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default Features;
