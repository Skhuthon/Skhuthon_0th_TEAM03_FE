import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import Review from "../components/Review";
import { Container, StartBtn } from "../styles/MyPageStyled";
import Pagination from "../components/BasicPagination";

const MyPage = () => {
    const [take, setTake] = useState<number>(1); // 총 페이지 수
    const [page, setPage] = useState<number>(1); // 현재 페이지

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
                    <div className="startBtn">
                        <p className="start">리뷰 작성</p>
                    </div>
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
