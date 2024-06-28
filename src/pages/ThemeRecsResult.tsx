import React from "react";
import { Container, StartBtn } from "../styles/ThemeRecsResultStyled";
import { IoIosArrowForward } from "react-icons/io";
import RoomTheme from "../components/RoomTheme";

const ThemeRecsResult = () => {
    return (
        <Container>
            <div className="textBox">
                <div className="subTitle">방프로가 추천하는</div>
                <div className="title">당신을 위한 방,</div>
            </div>

            <div className="resultBox">
                <RoomTheme />
                <RoomTheme />
                <RoomTheme />
            </div>

            <StartBtn isVisible={true}>
                <div className="startBtn">
                    <p className="start">홈으로</p>
                    <div className="icon">
                        <IoIosArrowForward />
                    </div>
                </div>
            </StartBtn>
        </Container>
    );
};

export default ThemeRecsResult;
