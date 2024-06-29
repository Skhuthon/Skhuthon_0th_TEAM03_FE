import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import { Container, StartBtn } from "../styles/ReadReviewStyled";

const PostReview = () => {
    const onInputHandler = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        // const value = e.target.value.trim(); // 입력값 앞뒤 공백 제거
        // if (e.target.name === "title") {
        //     setTitle(value);
        // } else if (e.target.name === "content") {
        //     setContent(value);
        //     setInputCount(value.length);
        // } else if (e.target.name === "tags") {
        //     const tagArray = value
        //         .split("#")
        //         .map((tag) => tag.trim())
        //         .filter((tag) => tag !== "");
        //     setTags(tagArray);
        // }
    };

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
                    <p className="read">테마 이름</p>
                </div>
                <div className="posting">
                    <p className="postTitle">성공 여부</p>
                    <p className="read">성공</p>
                </div>
                <div className="posting">
                    <p className="postTitle">인원 수</p>
                    <p className="read">0 명</p>
                </div>
                <div className="posting">
                    <p className="postTitle">힌트 사용</p>
                    <p className="read">4 개</p>
                </div>
                <div className="posting">
                    <p className="postTitle">남은 시간</p>
                    <p className="read">1 분</p>
                </div>
                <div className="posting">
                    <p className="postTitle">한 줄 리뷰</p>
                    <p className="read">재미있어요.</p>
                </div>
            </div>
        </Container>
    );
};
export default PostReview;
