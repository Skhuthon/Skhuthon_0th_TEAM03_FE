import styled from "styled-components";
import { Link } from "react-router-dom";

export const Theme = styled.div`
    width: 20vw;
    height: 20vh;
    padding: 1rem 2rem;
    margin: 0 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-color: #080101;
    color: white;
    border-radius: 1rem;
    filter: drop-shadow(0px 0px 7px #03ff8d);

    .titleBox > p {
        font-size: 1.7rem;
        border-left: 5px solid #03ff8d;
        padding-left: 0.5rem;
        font-weight: bold;
    }

    .addressBox > p {
        margin-top: 1rem;
        font-size: 1.2rem;
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
        background-color: #03ff8d;
        color: #080101;

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
