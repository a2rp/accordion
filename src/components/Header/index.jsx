import { FiGithub } from "react-icons/fi";

import { Styled } from "./styled";

function Header() {
    return (
        <Styled.Wrapper>
            <div className="container">
                <a className="brand" href="#top">
                    <span className="logo">A</span>

                    <div className="brandContent">
                        <span className="eyebrow">a2rp</span>

                        <h1>Accordion</h1>
                    </div>
                </a>

                <a
                    className="githubButton"
                    href="https://github.com/a2rp/accordion"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                >
                    <FiGithub />
                </a>
            </div>
        </Styled.Wrapper>
    );
}

export default Header;
