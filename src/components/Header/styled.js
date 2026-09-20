import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
            border-bottom: 1px solid #202020;
            background: rgba(8, 8, 8, 0.92);
            backdrop-filter: blur(18px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);

        .container {
            width: min(calc(100% - 48px), 1440px);
            height: 74px;
            margin: auto;

            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .logo {
            width: 44px;
            height: 44px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #303030;
            border-radius: 12px;

            background: #111111;

            color: #f5f5f5;

            font-size: 1rem;
            font-weight: 800;

            transition: 0.25s;
        }

        .logo img {
            width: 30px;
            height: 30px;
            object-fit: contain;
        }

        .brand:hover .logo {
            background: #f5f5f5;
            color: #050505;
            transform: rotate(-6deg);
        }

        .brand:focus-visible,
        .githubButton:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 5px;
            border-radius: 12px;
        }

        .brandContent {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .eyebrow {
            color: #6d6d6d;

            font-size: 0.625rem;

            font-weight: 800;

            letter-spacing: 0.16em;

            text-transform: uppercase;
        }

        h1 {
            color: #f5f5f5;

            font-size: 1.15rem;

            font-weight: 800;

            letter-spacing: -0.04em;
        }

        .githubButton {
            width: 42px;
            height: 42px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #2d2d2d;
            border-radius: 11px;

            background: #111111;

            color: #8a8a8a;

            font-size: 1rem;

            transition: 0.25s;
        }

        .githubButton:hover {
            background: #f5f5f5;
            color: #050505;
            transform: translateY(-2px);
        }

        @media (max-width: 700px) {
            .container {
                width: calc(100% - 28px);
            }

            h1 {
                font-size: 1rem;
            }
        }
    `,
};
