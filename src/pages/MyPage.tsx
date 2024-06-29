import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import Review from "../components/Review";
import { Container, StartBtn } from "../styles/MyPageStyled";
import Pagination from "../components/BasicPagination";
import axios from "axios";
import { Link } from "react-router-dom";

const MyPage = () => {
    const [take, setTake] = useState<number>(1); // 총 페이지 수
    const [page, setPage] = useState<number>(1); // 현재 페이지
    const [reviews, setReviews] = useState(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setAccessToken(token);
        }
        console.log(token);
    }, []);

    useEffect(() => {
        const reviewList = async () => {
            const token = localStorage.getItem('accessToken');
            try {
                const response = await axios.get("https://api.labyrinth30-edu.link/reviews",
                    {
                        headers: {'Authorization': `Bearer ${token}`}
                    }
                );
                setReviews(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        reviewList();
    }, []);

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value); // 페이지 변경 시 현재 페이지 상태 업데이트
    };

    return (
        <Container>
            <div className="headerBox">
                <div className="textBox">
                    <div className="subTitle">당신을 위한 방,</div>
                    <div className="title">username님의 방탈출 일지</div>
                </div>

                <StartBtn isVisible={true}>
                    <Link to={'/postReview'} className="startBtn">
                        <p className="start">리뷰 작성</p>
                    </Link>
                </StartBtn>
            </div>

            <div className="reviewBox">
                <Review />
                <Review />
                <Review />
                <Review />
                
            </div>

            <div className="paginationBox">
                <Pagination
                    count={take}
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
        </Container>
    );
};
export default MyPage;
