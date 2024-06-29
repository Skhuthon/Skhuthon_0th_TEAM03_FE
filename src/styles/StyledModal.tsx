import styled from "styled-components";
import ReactModal from "react-modal";

export const StyledModal = styled(ReactModal)`
    width: 25rem;
    height: 15rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: radial-gradient(50% 50% at 50% 50%, #3b3b3b 0%, #080101 100%);
    filter: drop-shadow(0px 0px 10px #03ff8e73);

    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .error {
        font-size: 1.2rem;
        /* font-weight: bold; */
        color: #03ff8d;
        /* #080101 */
    }

    .warningIcon {
        width: 3rem;
    }

    .okBtn {
        margin-top: 2rem;
        padding: 0.4rem 1.2rem;
        border-radius: 1rem;
        font-size: 0.9rem;
        color: #080101;
        background-color: #03ff8d;
        border: 1px solid #03ff8d;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .okBtn:hover {
        color: #03ff8d;
        background-color: #080101;
        cursor: pointer;
    }
`;

export const customStyles = {
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)", // 배경 블러 효과 추가
    },
};
