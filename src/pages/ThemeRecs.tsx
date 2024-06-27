import React from "react";
import Cube from "./Cube";
import { Container } from "../styles/ThemeRecsStyled";
import { IoIosArrowForward } from "react-icons/io";

const ThemeRecs = () => {
    return (
        <Container>
            <div className="textBox">
                <div className="subTitle">당신을 위한 방,</div>
                <div className="title">방탈출 맞춤 추천</div>
            </div>
            <div className="cubeBox">
                <Cube />
            </div>
            <div className="startBtn">
                <p className="start">시작하기</p>
                <div className="icon">
                    <IoIosArrowForward />
                </div>
            </div>
        </Container>
    );
};

export default ThemeRecs;
