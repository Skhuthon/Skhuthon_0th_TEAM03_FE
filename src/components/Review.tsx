import { Review } from "../styles/ReviewStyled";

const ReviewTheme = () => {
    return (
        <Review>
            <div className="titleBox">
                <p>제목</p>
            </div>
            <div className="addressBox">
                <p>매장</p>
            </div>
            <div className="contentBox">
                <p>리뷰</p>
            </div>
            <div className="cardFooter">
                <div className="hashtagBox">
                    <p>#탈출 성공</p>
                    <p>#4명</p>
                    <p>#힌트 3번</p>
                    <p>#남은 시간 10분</p>
                </div>
            </div>
        </Review>
    );
};

export default ReviewTheme;
