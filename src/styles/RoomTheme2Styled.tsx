import styled from "styled-components";
import { Link } from "react-router-dom";

export const Theme = styled.div`
    width: 15vw;
    height: 20vh;
    padding: 1.5vh 2vw;
    margin: 1vh 0.5vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-color: #1c1c1c;
    color: white;
    border-radius: 1rem;

    .titleBox > p {
        font-size: 1.4rem;
        border-left: 5px solid #03ff8d;
        padding-left: 0.5rem;
        font-weight: bold;
    }

    .addressBox > p {
        margin-top: 1rem;
        font-size: 1rem;
    }

    .cardFooter {
        width: inherit;
        margin-top: 1.5rem;

        display: flex;
        justify-content: space-between;
    }

    .hashtagBox {
        display: flex;
    }

    .hashtagBox > p {
        margin-right: 1rem;
    }

    .linkBtn {
        padding: 0.2rem 1rem;
        border-radius: 1rem;
        color: #080101;
        background-color: #03ff8d;

        cursor: pointer;
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
