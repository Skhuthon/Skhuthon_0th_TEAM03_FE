import * as React from "react";
import Pagination from "@mui/material/Pagination";

interface BasicPaginationProps {
    count: number; // 총 페이지 수
    page: number; // 현재 페이지 번호
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void; // 페이지 변경 이벤트 핸들러
}

const BasicPagination: React.FC<BasicPaginationProps> = ({
    count,
    page,
    onChange,
}) => {
    return (
        <Pagination
            count={count}
            page={page}
            onChange={onChange}
            sx={{
                "& .MuiPaginationItem-root": {
                    color: "#fff", // 원하는 색상
                },
                "& .Mui-selected": {
                    backgroundColor: "#03ff8e13", // 선택된 페이지 번호의 배경 색상
                    color: "#03FF8D", // 선택된 페이지 번호의 글자 색상
                },
                "& .MuiPaginationItem-icon": {
                    fill: "#fff", // 화살표 등 아이콘 색상
                },
            }}
        />
    );
};

export default BasicPagination;
