import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 20px 0 120px;

        .container {
            width: min(calc(100% - 48px), 960px);
            margin: auto;
        }

        .eyebrow {
            display: inline-block;

            margin-bottom: 16px;

            color: #707070;

            font-size: 0.72rem;

            font-weight: 800;

            letter-spacing: 0.16em;

            text-transform: uppercase;
        }

        h2 {
            margin-bottom: 18px;

            color: #f5f5f5;

            font-size: clamp(2.4rem, 5vw, 3.8rem);

            letter-spacing: -0.05em;
        }

        h2 span {
            color: #707070;
        }

        .description {
            max-width: 620px;

            margin-bottom: 34px;

            color: #8d8d8d;

            line-height: 1.9;
        }

        .summary {
            margin-bottom: 40px;

            display: flex;
        }

        .summaryCard {
            padding: 18px 24px;

            display: inline-flex;
            align-items: center;
            gap: 16px;

            border: 1px solid #272727;
            border-radius: 18px;

            background: #101010;

            transition: 0.25s;
        }

        .summaryCard:hover {
            transform: translateY(-4px);

            border-color: #404040;
        }

        .summaryCard svg {
            font-size: 1.6rem;

            color: #f5f5f5;
        }

        .summaryCard strong {
            display: block;

            color: #f5f5f5;

            font-size: 1.2rem;
        }

        .summaryCard span {
            color: #7f7f7f;

            font-size: 0.75rem;
        }

        .accordionList {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        @media (max-width: 700px) {
            padding-bottom: 90px;

            .container {
                width: calc(100% - 28px);
            }
        }
    `,
};
