import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import { Container, StartBtn } from "../styles/PostReviewStyled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface reviewInfo {
    themeName: String;
    isSuccess: Boolean;
    numberOfPeople: Number;
    numberOfHintsUsed: Number;
    remainingTime: Number;
    totalThemeTime: Number;
    content: String;
}

const PostReview = () => {
    // const onInputHandler = (
    //     _e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    // ) => {
    //     // const value = e.target.value.trim(); // 입력값 앞뒤 공백 제거
    //     // if (e.target.name === "title") {
    //     //     setTitle(value);
    //     // } else if (e.target.name === "content") {
    //     //     setContent(value);
    //     //     setInputCount(value.length);
    //     // } else if (e.target.name === "tags") {
    //     //     const tagArray = value
    //     //         .split("#")
    //     //         .map((tag) => tag.trim())
    //     //         .filter((tag) => tag !== "");
    //     //     setTags(tagArray);
    //     // }
    // };

    const navigate = useNavigate();
    const onChange = (e: any) => {
        console.log(e.target.value);
        setFormData(e.target.value);
    }

    const [formData, setFormData] = useState({
        themeName: "",
        isSuccess: true,
        numberOfPeople: 0,
        numberOfHintsUsed: 0,
        remainingTime: 0,
        totalThemeTime: 0,
        content: "",
    });

    const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const inputValue = type === "checkbox" && "checked" in e.target ? e.target.checked : value;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "number" ? Number(inputValue) : inputValue,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        
        event.preventDefault();
        
        const data = {
            ...formData,
        };
        console.log(formData);
        const token = localStorage.getItem('accessToken');
        if (token) {
            axios.post('https://api.labyrinth30-edu.link/reviews', data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log('Response:', response.data);
                    navigate('/reviews/${reviewId}');
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            console.error('No access token found');
        }

    };
    

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
                        placeholder="방탈출 지점과 테마 이름"
                        onChange={onInputHandler}
                        className="postThemeTitle"
                    ></input>
                </div>
                <div className="posting">
                    <p className="postTitle">성공 여부</p>
                    <select>
                        <option value="success">성공</option>
                        <option value="fail">실패</option>
                    </select>
                </div>
                <div className="posting">
                    <p className="postTitle">인원 수</p>
                    <input
                        type="number"
                        name="numberOfPeople"
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
                        placeholder="힌트 사용 개수"
                        onChange={onInputHandler}
                        className="postTagsBox"
                    ></input>
                </div>
                <div className="posting">
                    <p className="postTitle">남은 시간</p>
                    <input
                        name="remainingTime"
                        placeholder="남은 시간 (탈출 성공시, 초)"
                        onChange={onInputHandler}
                        className="postTagsBox"
                    ></input>
                </div>
                <div className="posting">
                    <p className="postTitle">한 줄 리뷰</p>
                    <textarea
                        name="content"
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
export default PostReview;
