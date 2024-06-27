import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    /* margin: 0; */
    margin-top: 10vh;
    background: radial-gradient(50% 50% at 50% 50%, #3b3b3b 0%, #080101 100%);

    display: flex;

    .textBox {
        width: 40vw;
        height: inherit;
        padding: 0 10vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .subTitle {
        color: white;
        font-size: 2.3rem;
    }

    .title {
        margin-top: 1rem;
        color: white;
        font-size: 3.8rem;
        font-weight: bold;
    }
    .cubeBox {
        width: 50vw;
        height: inherit;
    }

    .startBtn {
        position: absolute;
        bottom: 10vh;
        right: 10vw;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 10rem;
        height: 2rem;
        padding: 0.7rem 1rem;

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
        margin-right: 1rem;
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
