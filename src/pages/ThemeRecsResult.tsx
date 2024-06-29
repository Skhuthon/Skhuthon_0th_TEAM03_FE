import React, { useState, useEffect } from "react";
import {
    Container,
    StartBtn,
    StyledLink,
} from "../styles/ThemeRecsResultStyled";
import { IoIosArrowForward } from "react-icons/io";
import RoomTheme from "../components/RoomTheme";
import { useLocation } from "react-router-dom";
import { postThemeRecs } from "../api/ThemeRecsApi";
import { ThemeProps } from "../props/ThemeProps";

const ThemeRecsResult = () => {
    const location = useLocation();
    const { selectedDifficulty, selectedGenre, selectedRegion } =
        location.state || {};
    const [themeList, setThemeList] = useState<ThemeProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await postThemeRecs(
                selectedDifficulty,
                selectedGenre,
                selectedRegion
            );

            setThemeList(response);

            console.log(response);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <div className="textBox">
                <div className="subTitle">방프로가 추천하는</div>
                <div className="title">당신을 위한 방,</div>
            </div>

            <div className="resultBox">
                {themeList.length > 0 ? (
                    themeList.map((theme) => (
                        <RoomTheme
                            title={theme.title}
                            difficulty={theme.difficulty}
                            genre={theme.genre}
                            store={theme.store}
                        />
                    ))
                ) : (
                    <p className="notFound">조건에 맞는 테마가 없습니다. 🥲</p>
                )}
            </div>

            <StyledLink to="/themeList">
                <StartBtn isVisible={true}>
                    <div className="startBtn">
                        <p className="start">홈으로</p>
                        <div className="icon">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </StartBtn>
            </StyledLink>
        </Container>
    );
};

export default ThemeRecsResult;
