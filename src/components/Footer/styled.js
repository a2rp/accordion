import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        margin-top: 120px;

        border-top: 1px solid #1f1f1f;

        background: #070707;

        .container {
            width: min(calc(100% - 48px), 1440px);

            margin: auto;

            padding: 70px 0 26px;
        }

        .intro {
            max-width: 650px;

            margin-bottom: 50px;
        }

        .eyebrow {
            color: #777;

            font-size: 0.72rem;

            font-weight: 700;

            letter-spacing: 0.18em;

            text-transform: uppercase;
        }

        h2 {
            margin: 16px 0;

            font-size: clamp(2.5rem, 5vw, 4rem);

            letter-spacing: -0.05em;
        }

        p {
            color: #888;

            line-height: 1.9;
        }

        .linksWrapper {
            display: grid;

            grid-template-columns: repeat(2, 1fr);

            gap: 70px;
        }

        h3 {
            margin-bottom: 20px;

            font-size: 1rem;
        }

        .linksWrapper a {
            height: 48px;

            padding: 0 16px;

            margin-bottom: 12px;

            display: flex;

            align-items: center;

            gap: 12px;

            border: 1px solid #252525;

            border-radius: 12px;

            background: #101010;

            color: #888;

            transition: 0.25s;
        }

        .linksWrapper a:hover {
            transform: translateX(8px);

            background: #f5f5f5;

            color: #050505;
        }

        .linksWrapper svg {
            font-size: 1rem;

            transition: 0.25s;
        }

        .linksWrapper a:hover svg {
            transform: rotate(-10deg) scale(1.15);
        }

        .bottom {
            margin-top: 60px;

            padding-top: 22px;

            border-top: 1px solid #202020;

            display: flex;

            justify-content: space-between;

            align-items: center;
        }

        .bottom span {
            color: #666;
            font-size: 0.72rem;
        }

        .bottom span a {
            color: #bdbdbd;
            text-decoration: none;
            transition: color 0.25s ease;
            cursor: pointer;
        }

        .bottom span a:hover {
            color: #ffffff;
        }

        .backToTop {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 0;

            border: 0;

            background: transparent;

            color: #888;

            font: inherit;

            cursor: pointer;

            transition: 0.25s ease;
        }

        .backToTop:hover {
            color: #fff;
        }

        .backToTop:hover svg {
            transform: translateY(-3px);
        }

        @media (max-width: 850px) {
            .linksWrapper {
                grid-template-columns: 1fr;

                gap: 40px;
            }
        }

        @media (max-width: 700px) {
            .container {
                width: calc(100% - 28px);
            }

            .bottom {
                flex-direction: column;

                gap: 18px;
            }
        }
    `,
};
