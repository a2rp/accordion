import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;

        background:
            radial-gradient(
                circle at top left,
                rgba(255, 255, 255, 0.045),
                transparent 28%
            ),
            radial-gradient(
                circle at bottom right,
                rgba(255, 255, 255, 0.03),
                transparent 32%
            ),
            linear-gradient(180deg, #0b0b0b 0%, #080808 40%, #050505 100%);

        color: #f5f5f5;

        position: relative;

        overflow: hidden;

        isolation: isolate;

        &::before {
            content: "";

            position: absolute;

            width: 700px;

            height: 700px;

            top: -260px;

            left: -260px;

            border-radius: 50%;

            background: radial-gradient(
                circle,
                rgba(255, 255, 255, 0.05),
                transparent 70%
            );

            pointer-events: none;
        }

        &::after {
            content: "";

            position: absolute;

            width: 600px;

            height: 600px;

            right: -250px;

            bottom: -250px;

            border-radius: 50%;

            background: radial-gradient(
                circle,
                rgba(255, 255, 255, 0.04),
                transparent 72%
            );
        }

        &::before,
        &::after {
            pointer-events: none;
            z-index: 0;
        }

        main,
        header,
        footer {
            position: relative;
            z-index: 1;
        }

        main {
            padding-top: 74px;
        }
    `,
};
