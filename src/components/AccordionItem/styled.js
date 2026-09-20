import styled from "styled-components";

export const Styled = {
    Wrapper: styled.article`
        position: relative;
        overflow: hidden;

        border: 1px solid #252525;
        border-radius: 22px;
        background: #0f0f0f;

        transition:
            border-color 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);

        &:hover {
            border-color: #404040;
            transform: translateY(-3px);
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
        }

        &.open {
            border-color: #5a5a5a;
            background: #131313;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.38);
        }

        &::before {
            content: "";

            position: absolute;
            top: 18px;
            bottom: 18px;
            left: 0;
            z-index: 1;

            width: 3px;
            border-radius: 0 4px 4px 0;
            background: #f5f5f5;

            opacity: 0;
            transform: scaleY(0);
            transform-origin: bottom;
            transition:
                opacity 0.25s ease,
                transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        &.open::before {
            opacity: 1;
            transform: scaleY(1);
        }

        .accordionButton {
            width: 100%;
            min-height: 76px;
            padding: 0 28px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            color: #f5f5f5;
            transition: background 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .accordionButton:hover {
            background: #151515;
        }

        .accordionButton:focus-visible {
            position: relative;
            z-index: 2;
            outline: 2px solid #ffffff;
            outline-offset: -5px;
        }

        .accordionButton span {
            text-align: left;
            color: #f5f5f5;
            font-size: 1.05rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.6;
            transition:
                color 0.28s,
                transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .accordionButton:hover span {
            color: #ffffff;
            transform: translateX(6px);
        }

        .accordionButton svg {
            flex-shrink: 0;
            color: #9b9b9b;
            font-size: 1.35rem;
            transition:
                transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
                color 0.28s;
        }

        .accordionButton:hover svg {
            color: #ffffff;
            transform: translateY(2px) scale(1.12);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        &.open .content {
            grid-template-rows: 1fr;
        }

        .contentInner {
            overflow: hidden;
        }

        .contentInner p {
            padding: 22px 28px 28px;
            border-top: 1px solid #232323;
            color: #9a9a9a;
            line-height: 1.9;
        }

        @media (max-width: 700px) {
            .accordionButton {
                min-height: 68px;
                padding: 0 20px;
            }

            .contentInner p {
                padding: 18px 20px 22px;
            }
        }
    `,
};
