import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vw;
    // margin: 0;
    padding: 0 10vw;
    margin-top: 10vh;
    background: radial-gradient(50% 50% at 50% 50%, #3b3b3b 0%, #080101 100%);
    color: white;

    // display: flex;

    .userInfo {
        width: 80vw;
        // height: 20vw;
        margin: 2rem;
        
        display: flex;
        // justify-content: center;
    }

    .userName {
        font-size: 2.1rem;
    }

    .reviews {
        display: inline-block;
    }
        
    .reviewTitle {
        font-size: 2.1rem;
    }

    .moreReviews {
        color: white;
        display: flex;
        right: 10vw;
        position: absolute;
    }

    .reviewBox {
        margin: 10vh 0;
        display: flex;
    }

    .icon {
        display: flex;
        align-items: center;
    }

    .text {
        padding: 0 5vw;

        display: flex;
        flex-direction: column;
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

    .writingBtn {
        position: absolute;
        width: 10rem;
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

    .writingBtn:hover {
        filter: drop-shadow(0px 0px 10px #ffffff);
    }

    .writing {
        font-size: 1.5rem;
        margin-right: 0.3rem;
    }
`;