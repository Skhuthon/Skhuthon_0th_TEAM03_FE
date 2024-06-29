import { Review, StyledLink } from "../styles/ReviewStyled";
import { ReviewProps } from "../props/ReviewProps";

const ReviewTheme: React.FC<ReviewProps> = ({
    id,
    themeName,
    isSuccess,
    numberOfPeople,
    numberOfHintsUsed,
    remainingTime,
    totalThemeTime,
    content,
}) => {
    return (
        <StyledLink to={`/reviews/${id}`}>
            <Review>
                <>
                    <div className="titleBox">
                        <p>{themeName}</p>
                    </div>
                    <div className="contentBox">
                        <p>
                            {content.length > 35
                                ? content.slice(0, 35) + "..."
                                : content}
                        </p>
                    </div>
                    <div className="cardFooter">
                        <div className="hashtagBox">
                            <p>#{isSuccess ? "성공" : "실패"}</p>
                            <p>#{numberOfPeople}명과 함께</p>
                            <p>#{numberOfHintsUsed}개의 힌트</p>
                            <p>#테마 시간 {totalThemeTime}분</p>
                            <p>#남은 시간 {remainingTime}초</p>
                        </div>
                    </div>
                </>
            </Review>
        </StyledLink>
    );
};

export default ReviewTheme;
