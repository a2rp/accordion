import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        position: relative;
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
            margin-bottom: 18px;
            color: #f5f5f5;
            font-size: 1rem;
        }

        .iconLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .iconLinks a {
            width: 46px;
            height: 46px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #292929;
            border-radius: 14px;
            background: #101010;
            color: #8f8f8f;

            transition:
                background 0.25s ease,
                border-color 0.25s ease,
                color 0.25s ease,
                transform 0.25s ease;
        }

        .iconLinks a:hover {
            border-color: #ffffff;
            background: #f5f5f5;
            color: #050505;
            transform: translateY(-5px) rotate(-6deg);
        }

        .iconLinks a:focus-visible,
        .backToTop:focus-visible,
        .bottom a:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 4px;
        }

        .iconLinks svg {
            font-size: 1.05rem;
        }

        .bottom {
            margin-top: 60px;
            padding-top: 22px;
            border-top: 1px solid #202020;
            display: flex;
            align-items: center;
        }

        .bottom span {
            color: #666;
            font-size: 0.72rem;
        }

        .bottom .license {
            margin-left: 10px;
            color: #4f4f4f;
        }

        .bottom a {
            color: #bdbdbd;
            text-decoration: none;
            transition: color 0.25s ease;
        }

        .bottom a:hover {
            color: #ffffff;
        }

        .backToTop {
            position: fixed;
            right: 24px;
            bottom: 24px;
            z-index: 90;

            width: 48px;
            height: 48px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #3b3b3b;
            border-radius: 50%;
            background: #f5f5f5;
            color: #050505;
            box-shadow: 0 14px 35px rgba(0, 0, 0, 0.4);

            opacity: 0;
            pointer-events: none;
            transform: translateY(16px);
            transition:
                opacity 0.25s ease,
                transform 0.25s ease,
                background 0.25s ease;
        }

        .backToTop.visible {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
        }

        .backToTop:hover {
            background: #ffffff;
            transform: translateY(-4px);
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
                padding-bottom: 42px;
            }

            .backToTop {
                right: 16px;
                bottom: 16px;
            }
        }
    `,
};
