import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Styled } from "./styled";

function AccordionItem({ item, isOpen, onToggle }) {
    return (
        <Styled.Wrapper className={isOpen ? "open" : ""}>
            <button className="accordionButton" onClick={onToggle}>
                <span>{item.question}</span>

                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            <div className="content">
                <div className="contentInner">
                    <p>{item.answer}</p>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default AccordionItem;
