import { BsPersonFill } from "react-icons/bs";
import { Container } from "../styles/UserPageStyled";
import ReviewTheme from "../components/ReviewTheme";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const UserPage = () => {
    return (
        <>
            <Container>
                <div className="userInfo">
                    <div className="userImg">
                        <BsPersonFill />
                    </div>
                    <div className="userName">이름</div>
                </div>
                <div className="reviews">
                    <div className="reviewTitle">작성한 리뷰</div>
                    <NavLink to={`/reviewList`} className="moreReviews">
                        <div>더보기</div>
                        <div className="icon">
                            <IoIosArrowForward />
                        </div>
                    </NavLink>
                    <div className="reviewBox">
                        <ReviewTheme />
                        <ReviewTheme />
                        <ReviewTheme />
                    </div>
                </div>
                
                <div className="text">
                    <div className="subTitle">당신을 위한 방,</div>
                    <div className="title">어땠는지<br />남겨주시겠어요?</div>
                </div>
                <NavLink to={`/reviewWriting`}>
                    <>
                        <div className="writingBtn">
                            <div className="writing">남기러 가기</div>
                            <div className="icon">
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </>
                </NavLink>
            </Container>
        </>
    );
};
export default UserPage;