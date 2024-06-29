import { Theme } from "../styles/RoomThemeStyled";

const ReviewTheme = () => {
    return (
        <Theme>
            <div className="titleBox">
                <p>방탈출 테마 이름</p>
            </div>
            <div className="addressBox">
                <p>탈출 기록</p>
            </div>
            <div className="addressBox">
                <p>한 줄 평</p>
            </div>
            <div className="cardFooter">
                <div className="hashtagBox">
                    <p>#성공여부</p>
                    <p>#인원수</p>
                    <p>#힌트</p>
                    <p>#남은시간</p>
                </div>
            </div>
        </Theme>
    );
};

export default ReviewTheme;
