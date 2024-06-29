import { Select } from "../styles/ThemeRecsQuestionsStyled";
import { IoIosArrowForward } from "react-icons/io";
import { Container } from "../styles/NavbarStyled";
import axios from "axios";
import { useState } from "react";

interface reviewContents {
    themeName: String;
    isSuccess: Boolean;
    numberOfPeople: Number;
    numberofHintsUsed: Number;
    remainingTime: Number;
    totalThemeTime: Number;
    content: String;
}

const ReviewWriting = () => {
    const [minute1, setMinute1] = useState<number>(0);
    const [second, setSecond] = useState<number>(0);
    const [minute2, setMinute2] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const minute1Converted = minute1 / 60;
        const minute2Converted = minute2 / 60;

        const data = {
            minute1: minute1Converted,
            second: second,
            minute2: minute2Converted,
        };

        axios
            .post("YOUR_BACKEND_ENDPOINT", data)
            .then((response) => {
                console.log("Response:", response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <Container>
                <div>
                    <div>당신을 위한 방,</div>
                    <div>어떤 방이었나요?</div>
                </div>
                <div>
                    <textarea placeholder="테마 이름 적어주세요" />
                </div>
            </Container>
            <Container>
                <>
                    <div>
                        <div>당신을 위한 방,</div>
                        <div>탈출 기록은 어떻게 되시나요?</div>
                    </div>
                    <div>
                        <div>성공 여부</div>
                        <div>인원 수</div>
                        <div>힌트 사용 횟수</div>
                        <div>남은 시간</div>
                    </div>
                    <div>
                        {/* <Select>탈출 성공</Select>
                    <Select>탈출 실패</Select> */}
                    </div>
                    <div>
                        <input type="number" />명
                    </div>
                    <div>
                        <input type="number" />회
                    </div>
                    <div>
                        <input
                            type="number"
                            value={minute1}
                            onChange={(e) => setMinute1(Number(e.target.value))}
                        />
                        분
                        <input
                            type="number"
                            value={second}
                            onChange={(e) => setSecond(Number(e.target.value))}
                        />
                        초 /
                        <input
                            type="number"
                            value={minute2}
                            onChange={(e) => setMinute2(Number(e.target.value))}
                        />
                        분
                    </div>
                </>
            </Container>
            <Container>
                <div>
                    <div>당신을 위한 방,</div>
                    <div>어떠셨나요?</div>
                </div>
                <div>
                    <textarea
                        placeholder="한 줄 평 남겨주세요"
                        maxLength={500}
                    />
                </div>
                <div onClick={handleSubmit}>
                    <button>제출</button>
                    <div>
                        <IoIosArrowForward />
                    </div>
                </div>
            </Container>
        </>
    );
};
export default ReviewWriting;
