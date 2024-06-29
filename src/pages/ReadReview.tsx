import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import { Container, StartBtn } from "../styles/ReadReviewStyled";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostReview = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const { reviewId } = useParams<{ reviewId: string }>();
    const [review, setReview] = useState<any>(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        themeName: "",
        isSuccess: true,
        numberOfPeople: 0,
        numberOfHintsUsed: 0,
        remainingTime: 0,
        totalThemeTime: 0,
        content: "",
    });
    
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setAccessToken(token);
        }
    }, []);


    useEffect(() => {
        const fetchReview = async () => {
        const token = localStorage.getItem('accessToken');
            try {
                const response = await axios.get(`https://api.labyrinth30-edu.link/reviews/${reviewId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
            });
                setReview(response.data);
            } catch (error) {
                console.error("Error fetching review:", error);
            }
        };

        fetchReview();
    }, [reviewId]);

    if (!review) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <div className="postBox">
                <div className="btnBox">
                    <StartBtn isVisible={true}>
                        <div className="startBtn">
                            <p className="start">수정</p>
                        </div>
                    </StartBtn>

                    <StartBtn isVisible={true}>
                        <div className="startBtn">
                            <p className="start">삭제</p>
                        </div>
                    </StartBtn>
                </div>

                <div className="posting">
                    <p className="postTitle">테마 이름</p>
                    <p className="read">{review.themeName}</p>
                </div>
                <div className="posting">
                    <p className="postTitle">성공 여부</p>
                    <p className="read">{review.isSuccess}</p>
                </div>
                <div className="posting">
                    <p className="postTitle">인원 수</p>
                    <p className="read">{review.numberOfPeople} 명</p>
                </div>
                <div className="posting">
                    <p className="postTitle">힌트 사용</p>
                    <p className="read">{review.numberOfHintsUsed} 개</p>
                </div>
                <div className="posting">
                    <p className="postTitle">남은 시간</p>
                    <p className="read">{review.remainingTime} 분</p>
                </div>
                <div className="posting">
                    <p className="postTitle">한 줄 리뷰</p>
                    <p className="read">{review.content}</p>
                </div>
            </div>
        </Container>
    );
};
export default PostReview;
