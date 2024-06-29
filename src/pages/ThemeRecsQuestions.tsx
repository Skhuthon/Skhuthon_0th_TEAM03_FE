import React, { useEffect, useState } from "react";
import Cube from "./Cube";
import {
    Container,
    StartBtn,
    Select,
} from "../styles/ThemeRecsQuestionsStyled";
import { IoIosArrowForward } from "react-icons/io";
import { regions } from "../props/Regions";
import { genres } from "../props/Genres";
import { difficulty } from "../props/Difficulty";
import { useNavigate } from "react-router-dom";

const ThemeRecsQuestions = () => {
    let navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
        null
    );

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

    // 사용자 선택 핸들러
    const handleSelect = (type: string, value: string) => {
        if (type === "region") setSelectedRegion(value);
        if (type === "genre") setSelectedGenre(value);
        if (type === "difficulty") setSelectedDifficulty(value);
        console.log(value);
    };

    // 제출
    const submit = () => {
        console.log(
            selectedRegion + " " + selectedGenre + " " + selectedDifficulty
        );

        const fetchData = async () => {
            if (selectedDifficulty && selectedGenre && selectedRegion) {
                // const response = await postThemeRecs(
                //     selectedDifficulty,
                //     selectedGenre,
                //     selectedRegion
                // );

                navigate("/themeRecsResult", {
                    state: {
                        selectedDifficulty,
                        selectedGenre,
                        selectedRegion,
                    },
                });
            } else {
                alert("아직 선택되지 않은 문항이 있습니다.");
            }
        };

        fetchData();
    };

    return (
        <>
            <Container>
                <div className="textBox">
                    <div className="subTitle">당신을 위한 방,</div>
                    <div className="title">어느 지역을 원하시나요?</div>
                    <div className="selectBox">
                        {regions.map((region) => (
                            <Select
                                key={region.id}
                                onClick={() =>
                                    handleSelect("region", region.name)
                                }
                                isSelected={selectedRegion === region.name}
                            >
                                <p>{region.name}</p>
                            </Select>
                        ))}
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
                        {genres.map((genre) => (
                            <Select
                                key={genre.id}
                                onClick={() =>
                                    handleSelect("genre", genre.name)
                                }
                                isSelected={selectedGenre === genre.name}
                            >
                                <p>{genre.name}</p>
                            </Select>
                        ))}
                    </div>
                </div>
            </Container>
            <Container>
                <div className="textBox">
                    <div className="subTitle">당신을 위한 방,</div>
                    <div className="title">어떤 난이도를 원하시나요?</div>
                    <div className="selectBox">
                        {difficulty.map((d) => (
                            <Select
                                key={d.id}
                                onClick={() =>
                                    handleSelect("difficulty", d.name)
                                }
                                isSelected={selectedDifficulty === d.name}
                            >
                                <p>{d.name}</p>
                            </Select>
                        ))}
                    </div>
                </div>

                <div className="cubeBox">
                    <Cube />
                </div>
            </Container>

            <StartBtn isVisible={isVisible} onClick={() => submit()}>
                <div className="startBtn">
                    <p className="start">추천 받기</p>
                    <div className="icon">
                        <IoIosArrowForward />
                    </div>
                </div>
            </StartBtn>
        </>
    );
};

export default ThemeRecsQuestions;
