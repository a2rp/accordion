import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 10px 0 90px;

        .container {
            width: min(calc(100% - 48px), 1440px);
            margin: auto;
        }

        .eyebrow {
            display: inline-block;

            margin-bottom: 16px;

            color: #737373;

            font-size: 0.75rem;

            font-weight: 800;

            letter-spacing: 0.16em;

            text-transform: uppercase;
        }

        h2 {
            max-width: 720px;

            margin-bottom: 50px;

            color: #f5f5f5;

            font-size: clamp(2.2rem, 5vw, 3.6rem);

            line-height: 1.1;

            letter-spacing: -0.05em;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        .card {
            padding: 34px;

            border: 1px solid #252525;
            border-radius: 22px;

            background: #0f0f0f;

            transition: 0.3s ease;
        }

        .card:hover {
            transform: translateY(-8px);

            border-color: #444444;

            box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
        }

        .icon {
            width: 62px;
            height: 62px;

            margin-bottom: 24px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #2d2d2d;
            border-radius: 18px;

            background: #161616;

            transition: 0.3s ease;
        }

        .card:hover .icon {
            background: #f5f5f5;
            color: #050505;
            transform: rotate(-8deg);
        }

        .icon svg {
            font-size: 1.5rem;
        }

        h3 {
            margin-bottom: 14px;

            color: #f5f5f5;

            font-size: 1.3rem;

            letter-spacing: -0.03em;
        }

        p {
            color: #8a8a8a;

            font-size: 0.95rem;

            line-height: 1.8;
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding-bottom: 70px;

            .container {
                width: calc(100% - 28px);
            }

            .grid {
                grid-template-columns: 1fr;
            }
        }
    `,
};
