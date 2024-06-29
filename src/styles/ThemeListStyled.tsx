import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 80vw;
    /* height: 90vh; */
    padding: 10vh 10vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #080101;

    color: white;

    .headerBox {
        width: inherit;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-size: 2.3rem;
        font-weight: bold;
    }

    .searchBar > input {
        width: 17rem;
        padding: 0.7rem 1.5rem;
        background-color: #3b3b3b;
        color: white;
        border: none;
        border-radius: 0.8rem;
    }

    input:focus {
        outline: none;
    }

    .categoryBox {
        width: inherit;
        margin-top: 5vh;
        display: flex;
    }

    /* .category {
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid white;
        border-radius: 0.8rem;
    }

    .category:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.3);
    } */

    .themeBox {
        width: 80vw;
        margin-top: 7vh;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .paginationBox {
        margin-top: 7vh;
    }
`;

export const Select = styled.div<{ isSelected: boolean }>`
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 0.5rem 1.3rem;
    font-size: 1.2rem;
    color: white;
    border-radius: 1rem;
    border: 1px solid white;

    background-color: ${(props) => (props.isSelected ? "#03ff8e18" : null)};
    color: ${(props) => (props.isSelected ? "#03ff8e" : "#fff")};
    border-color: ${(props) => (props.isSelected ? "#00ff8c" : "#fff")};

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
        border-color: #ccc;
    }

    /* &:active {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: #ccc;
    } */
`;
