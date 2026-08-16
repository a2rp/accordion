import { FiArrowDown, FiCheckCircle, FiLayers, FiZap } from "react-icons/fi";

import { Styled } from "./styled";

function Hero() {
    const handleViewDemo = () => {
        document.getElementById("accordion")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="left">
                    <span className="eyebrow">React UI Component</span>

                    <h2>
                        Beautiful
                        <span> Accordion</span>
                    </h2>

                    <p>
                        A lightweight, responsive and reusable Accordion
                        component built with React and styled-components.
                        Perfect for FAQs, documentation, settings pages and
                        knowledge bases.
                    </p>

                    <button
                        type="button"
                        className="button"
                        onClick={handleViewDemo}
                    >
                        <span>View Demo</span>

                        <FiArrowDown />
                    </button>

                    <div className="stats">
                        <article className="stat">
                            <FiZap />

                            <div>
                                <strong>Fast</strong>

                                <span>Lightweight</span>
                            </div>
                        </article>

                        <article className="stat">
                            <FiLayers />

                            <div>
                                <strong>Reusable</strong>

                                <span>Easy Integration</span>
                            </div>
                        </article>

                        <article className="stat">
                            <FiCheckCircle />

                            <div>
                                <strong>Responsive</strong>

                                <span>Mobile Ready</span>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="right">
                    <div className="imageCard">
                        <img
                            src={`${import.meta.env.BASE_URL}images/hero.jpg`}
                            alt="Accordion Preview"
                        />

                        <div className="floating top">
                            <FiLayers />

                            <div>
                                <strong>Reusable</strong>

                                <span>Component</span>
                            </div>
                        </div>

                        <div className="floating bottom">
                            <FiZap />

                            <div>
                                <strong>Smooth</strong>

                                <span>Animation</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}

export default Hero;
