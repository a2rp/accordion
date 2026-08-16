import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 100px 0;

        .container {
            width: min(calc(100% - 48px), 1440px);
            margin: auto;

            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 70px;
            align-items: center;
        }

        .eyebrow {
            display: inline-block;

            margin-bottom: 18px;

            color: #7a7a7a;

            font-size: 0.75rem;

            font-weight: 800;

            letter-spacing: 0.18em;

            text-transform: uppercase;
        }

        h2 {
            margin-bottom: 28px;

            color: #f5f5f5;

            font-size: clamp(3.6rem, 7vw, 6rem);

            line-height: 0.92;

            letter-spacing: -0.06em;
        }

        h2 span {
            display: block;

            color: #6b6b6b;

            font-weight: 800;
        }

        p {
            max-width: 620px;

            color: #8a8a8a;

            font-size: 1rem;

            line-height: 1.9;
        }

        .button {
            margin-top: 40px;

            height: 54px;

            padding: 0 24px;

            display: inline-flex;
            align-items: center;
            gap: 12px;

            border: 1px solid #303030;
            border-radius: 14px;

            background: #111111;

            color: #f5f5f5;

            font-size: 0.95rem;
            font-weight: 700;

            transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .button svg {
            transition: transform 0.25s ease;
        }

        .button:hover {
            color: #050505;

            background: #ffffff;

            transform: translateY(-3px);

            box-shadow: 0 15px 35px rgba(255, 255, 255, 0.12);
        }

        .button:hover svg {
            transform: translateY(4px);
        }

        .stats {
            margin-top: 48px;

            display: flex;
            gap: 18px;
            flex-wrap: wrap;
        }

        .stat {
            min-width: 180px;

            padding: 18px;

            display: flex;
            align-items: center;
            gap: 14px;

            border: 1px solid #242424;
            border-radius: 18px;

            background: #0f0f0f;

            transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .stat:hover {
            border-color: #404040;

            background: #151515;

            transform: translateY(-6px);

            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.32);
        }

        .stat svg {
            font-size: 1.45rem;
            color: #d8d8d8;
        }

        .stat strong {
            display: block;

            margin-bottom: 4px;

            color: #f5f5f5;

            font-size: 0.95rem;
        }

        .stat span {
            color: #7d7d7d;

            font-size: 0.75rem;
        }

        .imageCard {
            position: relative;

            overflow: hidden;

            border: 1px solid #242424;
            border-radius: 28px;

            background: #101010;

            box-shadow:
                0 30px 80px rgba(0, 0, 0, 0.45),
                inset 0 1px 0 rgba(255, 255, 255, 0.03);

            transition:
                transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
                box-shadow 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .imageCard:hover {
            transform: translateY(-8px) rotate(0.3deg);

            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.55);
        }

        .imageCard::before {
            content: "";

            position: absolute;

            inset: 0;

            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.05),
                rgba(0, 0, 0, 0.45)
            );

            z-index: 1;

            pointer-events: none;
        }

        .imageCard::after {
            content: "";

            position: absolute;

            inset: 0;

            background: radial-gradient(
                circle at center,

                transparent 45%,

                rgba(0, 0, 0, 0.45)
            );

            pointer-events: none;

            z-index: 1;
        }

        .imageCard img {
            width: 100%;

            display: block;

            filter: brightness(0.9) contrast(1.05) saturate(1.08);

            transition:
                transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1),
                filter 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .imageCard:hover img {
            transform: scale(1.06);

            filter: brightness(1) contrast(1.08) saturate(1.12);
        }

        .floating {
            position: absolute;

            z-index: 2;

            padding: 18px;

            display: flex;

            align-items: center;

            gap: 14px;

            border: 1px solid rgba(255, 255, 255, 0.08);

            border-radius: 18px;

            background: rgba(8, 8, 8, 0.72);

            backdrop-filter: blur(18px);

            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);

            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .floating:hover {
            transform: translateY(-5px) scale(1.03);
        }

        .floating svg {
            color: #ffffff;
            font-size: 1.2rem;
        }

        .floating strong {
            display: block;

            color: #f5f5f5;

            font-size: 0.9rem;
        }

        .floating span {
            color: #8a8a8a;

            font-size: 0.72rem;
        }

        .floating.top {
            top: 20px;

            left: 20px;
        }

        .floating.bottom {
            right: 20px;

            bottom: 20px;
        }

        @media (max-width: 980px) {
            .container {
                grid-template-columns: 1fr;
            }

            .right {
                order: -1;
            }
        }

        @media (max-width: 700px) {
            padding: 70px 0;

            .container {
                width: calc(100% - 28px);
            }

            h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .stats {
                flex-direction: column;
            }

            .stat {
                width: 100%;
            }

            .floating {
                position: static;
                margin: 16px;
            }
        }
    `,
};
