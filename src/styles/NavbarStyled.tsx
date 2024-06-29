import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 80vw;
    height: 10vh;
    padding: 0 10vw;

    position: fixed;
    top: 0;
    z-index: 2;

    display: flex;
    justify-content: space-between;

    background-color: #080101;
    box-shadow: 0px 4px 3rem rgba(93, 93, 93, 0.265);
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
`;

export const NavLink = styled(Link)`
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    .nav {
        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.3s ease-in-out;
    }

    .nav > div {
        font-size: 1.4rem;
        margin-right: 0.7rem;
    }

    .nav:hover {
        cursor: pointer;
        color: white;
        transform: scale(1.05);
    }

    &:focus,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #3b3b3b;
    }
`;
