import ReviewTheme from "../components/ReviewTheme";
import { Container } from "../styles/ReviewListStyled";

const ReviewList = () => {
    return (
        <>
            <Container>
                <div className="written">작성한 리뷰</div>
                <div className="reviewBox">
                    <ReviewTheme />
                    <ReviewTheme />
                    <ReviewTheme />
                </div>
            </Container>
        </>
    )
}
export default ReviewList;