import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    /* margin: 0; */
    margin-top: 10vh;
    background: radial-gradient(50% 50% at 50% 50%, #3b3b3b 0%, #080101 100%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loginBtn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 25rem;
        height: 15rem;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background: radial-gradient(
            50% 50% at 50% 50%,
            #3b3b3b 0%,
            #080101 100%
        );
        filter: drop-shadow(0px 0px 10px #03ff8e73);
        border-radius: 1rem;
    }

    .title {
        margin-bottom: 2rem;
        font-size: 1.2rem;
        color: white;
    }
`;
