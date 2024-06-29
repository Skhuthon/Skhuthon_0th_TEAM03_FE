import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background: radial-gradient(50% 50% at 50% 50%, #3b3b3b 0%, #080101 100%);

    display: flex;
    flex-direction: column;

    .textBox {
        width: 80vw;
        height: 40vh;
        padding: 0 10vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .subTitle {
        color: white;
        font-size: 2.1rem;
    }

    .title {
        margin-top: 1rem;
        color: white;
        font-size: 3.7rem;
        font-weight: bold;
    }
    .cubeBox {
        width: 40vw;
        height: inherit;
    }

    .selectBox {
        width: 43vw;
        margin-top: 2rem;
        flex-wrap: wrap;

        display: flex;
    }

    .resultBox {
        width: 100vw;
        height: 50vh;

        display: flex;
        justify-content: center;
    }

    .notFound {
        margin-top: 5vh;
        color: white;
        font-size: 1.3rem;
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
        position: fixed;
        bottom: 10vh;
        right: 10vw;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 2rem;
        padding: 0.7rem 2rem;

        border-radius: 1rem;
        border: 3px solid white;

        color: white;
        background-color: #080101;
        cursor: pointer;
        filter: drop-shadow(0px 0px 10px #ffffff62);
        transition: 0.2s all ease-in-out;
    }

    .startBtn:hover {
        filter: drop-shadow(0px 0px 10px #ffffff);
    }

    .start {
        font-size: 1.5rem;
        margin-right: 0.3rem;
    }

    .icon {
        width: 1.5rem;
        font-size: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const Select = styled.div`
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 0.5rem 1.3rem;
    font-size: 1.2rem;
    color: white;
    border-radius: 1rem;
    border: 1px solid white;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
        border-color: #ccc;
    }

    &:active {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: #ccc;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
