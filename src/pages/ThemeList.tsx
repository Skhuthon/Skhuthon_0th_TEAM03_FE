import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import { Container } from "../styles/ThemeListStyled";
import { useNavigate } from "react-router-dom";
import RoomTheme2 from "../components/RoomTheme2";
import Pagination from "../components/BasicPagination";
import { getThemeList } from "../api/ThemeListApi";
import { ThemeProps } from "../props/ThemeProps";

const ThemeList = () => {
    const navigate = useNavigate();
    const [inputKeyword, setInputKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [take, setTake] = useState<number>(1); // 총 페이지 수
    const [page, setPage] = useState<number>(1); // 현재 페이지

    const [themeList, setThemeList] = useState<ThemeProps[]>([]);

    const handleInputKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputKeyword(event.target.value);
    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        // 엔터 키가 눌렸는지 확인
        if (event.key === "Enter") {
            // 엔터 키가 눌렸을 때 실행할 동작
            navigate(`/postBoard?keyword=${inputKeyword}`);

            event.preventDefault(); // 폼 자동 제출 방지
        }
    };

    const submit = () => {
        console.log("Submitted:", inputKeyword);
        // 여기에 제출 로직 추가
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value); // 페이지 변경 시 현재 페이지 상태 업데이트
    };

    useEffect(() => {
        const fetchData = async () => {
            const themes = await getThemeList(page, "", "");
            setThemeList(themes.data);
            setTake(themes.totalPages);
            console.log(themes);
        };

        fetchData();
    }, [page]);

    return (
        <Container>
            <div className="headerBox">
                <p className="title">방탈출 테마 정보</p>
                <div className="searchBox">
                    <div className="searchBar">
                        <input
                            placeholder="검색"
                            type="text"
                            value={inputKeyword}
                            onChange={handleInputKeyword}
                            onKeyDown={handleKeyDown}
                        ></input>
                    </div>
                </div>
            </div>
            <div className="categoryBox">
                <div className="category">서울 전체</div>
                <div className="category">홍대</div>
                <div className="category">강남</div>
                <div className="category">건대</div>
                <div className="category">대학로</div>
                <div className="category">신촌</div>
                <div className="category">잠실</div>
                <div className="category">신림</div>
                <div className="category">노원</div>
                <div className="category">서울 (기타)</div>
            </div>

            <div className="themeBox">
                {themeList?.map((theme) => (
                    <RoomTheme2
                        title={theme.title}
                        difficulty={theme.difficulty}
                        genre={theme.genre}
                        store={theme.store}
                    />
                ))}
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

export default ThemeList;
