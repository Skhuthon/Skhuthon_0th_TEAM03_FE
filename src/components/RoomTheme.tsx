import React from "react";
import { Theme } from "../styles/RoomThemeStyled";
import { ThemeProps } from "../props/ThemeProps";

const RoomTheme: React.FC<ThemeProps> = ({
    title,
    difficulty,
    genre,
    store,
}) => {
    return (
        <Theme
            data-aos="flip-right"
            data-aos-duration="3000"
            data-aos-easing="ease-out-cubic"
        >
            <div className="titleBox">
                <p>{title}</p>
            </div>
            <div className="addressBox">
                <p>{store.name}</p>
            </div>
            <div className="cardFooter">
                <div className="hashtagBox">
                    <p>#{difficulty}</p>
                    <p>#{genre}</p>
                </div>
                {/* <div className="linkBtn">
                    <p>예약 사이트</p>
                </div> */}
                <a
                    href={store.reservationSite}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="linkBtn">
                        <p>예약</p>
                    </div>
                </a>
            </div>
        </Theme>
    );
};

export default RoomTheme;
