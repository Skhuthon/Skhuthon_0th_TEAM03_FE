import React from "react";
import { Theme } from "../styles/RoomTheme2Styled";

const RoomTheme2 = () => {
    return (
        <Theme>
            <div className="titleBox">
                <p>방탈출 테마 이름</p>
            </div>
            <div className="addressBox">
                <p>매장 정보</p>
            </div>
            <div className="cardFooter">
                <div className="hashtagBox">
                    <p>#난이도</p>
                    <p>#장르</p>
                </div>
                <div className="linkBtn">
                    <p>예약</p>
                </div>
            </div>
        </Theme>
    );
};

export default RoomTheme2;
