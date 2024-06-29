import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import { Container, StartBtn } from "../styles/PostReviewStyled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// interface reviewInfo {
//     themeName: String;
//     isSuccess: Boolean;
//     numberOfPeople: Number;
//     numberOfHintsUsed: Number;
//     remainingTime_min: Number;
//     remainingTime_sec: Number;
//     totalThemeTime: Number;
//     content: String;
// }

const EditReview = () => {
    const navigate = useNavigate();
    const onChange = (e: any) => {
        console.log(e.target.value);
        setFormData(e.target.value);
    };
    const { reviewId } = useParams<{ reviewId: string }>();

    const [formData, setFormData] = useState({
        themeName: "",
        isSuccess: true,
        numberOfPeople: 0,
        numberOfHintsUsed: 0,
        remainingTime_min: 0,
        remainingTime_sec: 0,
        remainingTime: 0,
        totalThemeTime: 0,
        content: "",
    });

    const onInputHandler = (
        e: ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        const inputValue =
            type === "checkbox" && "checked" in e.target
                ? e.target.checked
                : value;

        setFormData((prevState) => {
            let updatedState = {
                ...prevState,
                [name]: type === "number" ? Number(inputValue) : inputValue,
            };

            // remainingTime_min과 remainingTime_sec의 값을 기반으로 remainingTime을 업데이트
            if (name === "remainingTime_min" || name === "remainingTime_sec") {
                const remainingTime_min =
                    name === "remainingTime_min"
                        ? Number(inputValue)
                        : prevState.remainingTime_min;
                const remainingTime_sec =
                    name === "remainingTime_sec"
                        ? Number(inputValue)
                        : prevState.remainingTime_sec;
                updatedState = {
                    ...updatedState,
                    remainingTime: remainingTime_min * 60 + remainingTime_sec,
                };
            }

            if (name === "isSuccess") {
                updatedState = {
                    ...updatedState,
                    isSuccess: value === "true",
                };
            }

            return updatedState;
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // formData에서 remainingTime_min와 remainingTime_sec를 제외한 새로운 객체 생성
        const { remainingTime_min, remainingTime_sec, ...data } = formData;

        console.log(data);
        const token = localStorage.getItem("accessToken");
        if (token) {
            axios
                .patch(
                    `https://api.labyrinth30-edu.link/reviews/${reviewId}`,
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((response) => {
                    console.log("Response:", response.data);
                    navigate(`/mypage`);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            console.error("No access token found");
        }
    };

    useEffect(() => {
        const fetchPostData = async () => {
            const token = localStorage.getItem("accessToken");

            try {
                const response = await axios.get(
                    `https://api.labyrinth30-edu.link/reviews/${reviewId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(response);
                const postData = response.data;

                const remainingTime_min = Math.floor(
                    postData.remainingTime / 60
                );
                const remainingTime_sec = postData.remainingTime % 60;

                setFormData({
                    themeName: postData.themeName,
                    isSuccess: postData.isSuccess,
                    numberOfPeople: postData.numberOfPeople,
                    numberOfHintsUsed: postData.numberOfHintsUsed,
                    remainingTime_min: remainingTime_min,
                    remainingTime_sec: remainingTime_sec,
                    remainingTime: postData.remainingTime,
                    totalThemeTime: postData.totalThemeTime,
                    content: postData.content,
                });
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        };

        fetchPostData();
    }, [reviewId]);

    return (
        <Container>
            <div className="postBox">
                <div className="btnBox">
                    <StartBtn isVisible={true}>
                        <div className="startBtn" onClick={handleSubmit}>
                            <p className="start">저장</p>
                        </div>
                    </StartBtn>
                </div>

                <div className="posting">
                    <p className="postTitle">테마 이름</p>
                    <input
                        name="themeName"
                        value={formData.themeName}
                        placeholder="방탈출 지점과 테마 이름"
                        onChange={onInputHandler}
                        className="postThemeTitle"
                    ></input>
                </div>
                <div className="posting">
                    <p className="postTitle">성공 여부</p>
                    <select
                        name="isSuccess"
                        value={formData.isSuccess ? "true" : "false"}
                        onChange={onInputHandler}
                    >
                        <option value="true">성공</option>
                        <option value="false">실패</option>
                    </select>
                </div>
                <div className="posting">
                    <p className="postTitle">인원 수</p>
                    <input
                        type="number"
                        name="numberOfPeople"
                        value={formData.numberOfPeople}
                        placeholder="플레이 인원"
                        onChange={onInputHandler}
                        className="postTagsBox"
                    ></input>
                </div>
                <div className="posting">
                    <p className="postTitle">힌트 사용</p>
                    <input
                        type="number"
                        name="numberOfHintsUsed"
                        value={formData.numberOfHintsUsed}
                        placeholder="힌트 사용 개수"
                        onChange={onInputHandler}
                        className="postTagsBox"
                    ></input>
                </div>

                <div className="posting">
                    <p className="postTitle">테마 시간</p>
                    <input
                        name="totalThemeTime"
                        value={formData.totalThemeTime}
                        type="number"
                        placeholder="분"
                        onChange={onInputHandler}
                        className="postTagsBox totalThemeTime"
                    ></input>
                </div>
                <div className="posting">
                    <p className="postTitle">남은 시간</p>
                    <input
                        name="remainingTime_min"
                        value={formData.remainingTime_min}
                        type="number"
                        placeholder="분"
                        onChange={onInputHandler}
                        className="postTagsBox remainingTime"
                    ></input>
                    <input
                        name="remainingTime_sec"
                        value={formData.remainingTime_sec}
                        type="number"
                        placeholder="초"
                        onChange={onInputHandler}
                        className="postTagsBox remainingTime"
                    ></input>
                </div>

                <div className="posting">
                    <p className="postTitle">한 줄 리뷰</p>
                    <textarea
                        name="content"
                        value={formData.content}
                        placeholder="내용을 입력해주세요"
                        onChange={onInputHandler}
                        maxLength={2000}
                        className="postContent"
                    ></textarea>
                </div>
            </div>
        </Container>
    );
};
export default EditReview;
