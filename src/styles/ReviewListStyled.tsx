import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    /* margin: 0; */
    margin-top: 10vh;
    background: radial-gradient(50% 50% at 50% 50%, #3b3b3b 0%, #080101 100%);

    display: flex;

    .written {
        color: white;
        font-size: 3rem;
        display: flex;
    }

    .reviewBox {
        width: 80vw;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
`