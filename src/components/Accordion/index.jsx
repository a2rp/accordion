import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

import AccordionItem from "../AccordionItem";

import { faq } from "../../data/faq";

import { Styled } from "./styled";

function Accordion() {
    const [activeId, setActiveId] = useState(1);

    const handleToggle = (id) => {
        setActiveId((current) => (current === id ? null : id));
    };

    return (
        <Styled.Wrapper id="accordion">
            <div className="container">
                <span className="eyebrow">Component Demo</span>

                <h2>
                    Frequently Asked
                    <span> Questions</span>
                </h2>

                <p className="description">
                    A clean and reusable Accordion component suitable for FAQs,
                    documentation, settings, onboarding screens and knowledge
                    bases.
                </p>

                <div className="summary">
                    <div className="summaryCard">
                        <FiMessageSquare />

                        <div>
                            <strong>{faq.length}</strong>

                            <span>Demo Questions</span>
                        </div>
                    </div>
                </div>

                <div className="accordionList">
                    {faq.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={activeId === item.id}
                            onToggle={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default Accordion;
