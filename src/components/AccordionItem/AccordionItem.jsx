import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "./AccordionItem.module.css";

function AccordionItem({ item, isOpen, onToggle }) {
    const questionId = `question-${item.id}`;
    const answerId = `answer-${item.id}`;

    return (
        <article className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <button
                type="button"
                id={questionId}
                className={styles.button}
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={answerId}
            >
                <span>{item.question}</span>
                {isOpen ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
            </button>

            <div
                id={answerId}
                className={styles.content}
                role="region"
                aria-labelledby={questionId}
                aria-hidden={!isOpen}
            >
                <div className={styles.contentInner}>
                    <p>{item.answer}</p>
                </div>
            </div>
        </article>
    );
}

export default AccordionItem;
