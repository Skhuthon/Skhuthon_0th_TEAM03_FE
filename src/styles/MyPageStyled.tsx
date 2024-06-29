import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    padding: 10vh 10vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;

    .headerBox {
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .subTitle {
        color: white;
        font-size: 2rem;
    }

    .title {
        margin-top: 1rem;
        color: white;
        font-size: 3rem;
        font-weight: bold;
    }

    .reviewBox {
        width: inherit;
        margin-top: 7vh;

        display: flex;
        flex-wrap: wrap;
    }

    .paginationBox {
        margin-top: 7vh;
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
        padding: 0.4rem 1.6rem;

        display: flex;
        justify-content: center;
        align-items: center;

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
        font-size: 1.2rem;
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
