import { Select } from "../styles/ThemeRecsQuestionsStyled";
import { IoIosArrowForward } from "react-icons/io";
import { Container } from "../styles/NavbarStyled";

const ReviewWriting = () => {
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
                    <Select>탈출 성공</Select>
                    <Select>탈출 실패</Select>
                </div>
                <div>
                    <input type="number" />명
                </div>
                <div>
                    <input type="number" />회
                </div>
                <div>
                    <input type="number" />분
                    <input type="number" />초 / 
                    <input type="number" />분
                </div>
            </>
        </Container>
        <Container>
            <div>
                <div>당신을 위한 방,</div>
                <div>어떠셨나요?</div>
            </div>
            <div>
                <textarea placeholder="한 줄 평 남겨주세요" />
            </div>
            <div>
                <button>제출</button>
                <div>
                    <IoIosArrowForward />
                </div>
            </div>
        </Container>
        </>
    )
}
export default ReviewWriting;