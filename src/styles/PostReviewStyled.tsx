import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background: radial-gradient(50% 50% at 50% 50%, #3b3b3b 0%, #080101 100%);

    color: white;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    .postBox {
        width: 50vw;
        height: 70vh;
        padding: 1vh 5vw;

        background-color: white;
        border-radius: 3rem 3rem 0 0;

        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: none;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .btnBox {
        width: inherit;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5vh;
    }

    .posting {
        display: flex;
        align-items: center;
        margin: 1vh 0;
    }

    .postTitle {
        width: 6rem;
        margin-right: 1rem;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .posting > input,
    .posting > textarea,
    .posting > select {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #080101;
        border: none;
        color: white;
        font-size: 1rem;
    }

    .posting > input:focus,
    .posting > textarea:focus,
    .posting > select:focus {
        outline: none;
    }

    .postThemeTitle {
        width: 20rem;
    }

    .postContent {
        width: 40vw;
        height: 15vh;
        min-width: 10vw;
        min-height: 5vh;
        max-width: 40vw;
        max-height: 20vh;
    }

    .totalThemeTime,
    .remainingTime {
        width: 2rem;
        margin-right: 1rem;
    }
`;

export const StartBtn = styled.div<{ isVisible: boolean }>`
    // 화면 맨 끝에 도착해야만 보이게
    transition: opacity 0.7s ease-in-out;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.isVisible ? "translateY(0)" : "translateY(20px)"};
    visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};

    .startBtn {
        height: 2rem;
        padding: 0.2rem 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 1rem;
        border: 2px solid white;

        color: white;
        cursor: pointer;
        filter: drop-shadow(0px 0px 10px #ffffff62);
        transition: 0.2s all ease-in-out;
    }

    .startBtn:hover {
        filter: drop-shadow(0px 0px 10px #ffffff);
    }

    .start {
        font-size: 1rem;
    }
`;
