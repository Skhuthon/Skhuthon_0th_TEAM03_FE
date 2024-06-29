import React from "react";
import { Theme } from "../styles/RoomTheme2Styled";
import { ThemeProps } from "../props/ThemeProps";

const RoomTheme2: React.FC<ThemeProps> = ({
    title,
    difficulty,
    genre,
    store,
}) => {
    return (
        <Theme data-aos="fade-up" data-aos-duration="1000">
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

export default RoomTheme2;
