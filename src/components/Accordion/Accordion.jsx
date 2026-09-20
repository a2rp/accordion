import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

import { faq } from "../../data/faq";
import AccordionItem from "../AccordionItem/AccordionItem";
import styles from "./Accordion.module.css";

function Accordion() {
    const [activeId, setActiveId] = useState(1);

    const toggleItem = (id) => {
        setActiveId((currentId) => (currentId === id ? null : id));
    };

    return (
        <section
            className={styles.accordion}
            id="accordion"
            aria-labelledby="accordion-title"
        >
            <div className={styles.container}>
                <span className={styles.eyebrow}>Component demo</span>
                <h2 id="accordion-title">
                    Frequently Asked <span>Questions</span>
                </h2>
                <p className={styles.description}>
                    A clean and reusable Accordion component suitable for FAQs,
                    documentation, settings, onboarding screens and knowledge bases.
                </p>

                <div className={styles.summary}>
                    <FiMessageSquare aria-hidden="true" />
                    <span>
                        <strong>{faq.length}</strong>
                        <small>Demo questions</small>
                    </span>
                </div>

                <div className={styles.list}>
                    {faq.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={activeId === item.id}
                            onToggle={() => toggleItem(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Accordion;
