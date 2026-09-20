import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Styled } from "./styled";

function AccordionItem({ item, isOpen, onToggle }) {
    const questionId = `question-${item.id}`;
    const answerId = `answer-${item.id}`;

    return (
        <Styled.Wrapper className={isOpen ? "open" : ""}>
            <button
                type="button"
                id={questionId}
                className="accordionButton"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={answerId}
            >
                <span>{item.question}</span>

                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            <div
                id={answerId}
                className="content"
                role="region"
                aria-labelledby={questionId}
                aria-hidden={!isOpen}
            >
                <div className="contentInner">
                    <p>{item.answer}</p>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default AccordionItem;
