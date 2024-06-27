import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 80vw;
    height: 10vh;
    padding: 0 10vw;

    position: fixed;
    top: 0;

    display: flex;
    justify-content: space-between;

    background-color: #080101;
    box-shadow: 0px 4px 50px rgba(255, 255, 255, 0.2);
    color: #3b3b3b;

    .logoBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logoBox > img {
        width: 6vw;
    }

    .navBox {
        width: 30vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navBox > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navBox > div > div {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.4rem;
        margin-right: 0.7rem;
    }

    .navBox > div:hover {
        cursor: pointer;
        color: white;
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
