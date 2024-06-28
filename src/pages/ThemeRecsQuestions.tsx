import React, { useEffect, useState } from "react";
import Cube from "./Cube";
import {
    Container,
    StartBtn,
    Select,
    StyledLink,
} from "../styles/ThemeRecsQuestionsStyled";
import { IoIosArrowForward } from "react-icons/io";

const ThemeRecsQuestions = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const bottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 10; // Slight buffer to ensure visibility
        setIsVisible(bottom);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Container>
                <div className="textBox">
                    <div className="subTitle">당신을 위한 방,</div>
                    <div className="title">어느 지역을 원하시나요?</div>
                    <div className="selectBox">
                        <Select>
                            <p>서울 전체</p>
                        </Select>
                        <Select>
                            <p>홍대</p>
                        </Select>
                        <Select>
                            <p>강남</p>
                        </Select>
                        <Select>
                            <p>건대</p>
                        </Select>
                        <Select>
                            <p>대학로</p>
                        </Select>
                        <Select>
                            <p>신촌</p>
                        </Select>
                        <Select>
                            <p>잠실</p>
                        </Select>
                        <Select>
                            <p>신림</p>
                        </Select>
                        <Select>
                            <p>노원</p>
                        </Select>
                        <Select>
                            <p>서울 (기타)</p>
                        </Select>
                    </div>
                </div>
                <div className="cubeBox">
                    <Cube />
                </div>
            </Container>
            <Container>
                <div className="cubeBox">
                    <Cube />
                </div>
                <div className="textBox">
                    <div className="subTitle">당신을 위한 방,</div>
                    <div className="title">어떤 장르를 원하시나요?</div>
                    <div className="selectBox">
                        <Select>
                            <p>랜덤</p>
                        </Select>
                        <Select>
                            <p>감성</p>
                        </Select>
                        <Select>
                            <p>공포 / 스릴러</p>
                        </Select>
                        <Select>
                            <p>코믹</p>
                        </Select>
                        <Select>
                            <p>추리</p>
                        </Select>
                        <Select>
                            <p>모험</p>
                        </Select>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="textBox">
                    <div className="subTitle">당신을 위한 방,</div>
                    <div className="title">어떤 난이도를 원하시나요?</div>
                    <div className="selectBox">
                        <Select>
                            <p>어려움</p>
                        </Select>
                        <Select>
                            <p>보통</p>
                        </Select>
                        <Select>
                            <p>쉬움</p>
                        </Select>
                    </div>
                </div>

                <div className="cubeBox">
                    <Cube />
                </div>
            </Container>

            <StyledLink to={`/themeRecsResult`}>
                <StartBtn isVisible={isVisible}>
                    <div className="startBtn">
                        <p className="start">추천 받기</p>
                        <div className="icon">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </StartBtn>
            </StyledLink>
        </>
    );
};

export default ThemeRecsQuestions;
