import React from "react";
import { Container } from "../styles/NavbarStyled";
import logo from "../image/bangpro_logo.png";
import { BsChatSquareHeartFill } from "react-icons/bs";
import { BsCollectionFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <Container>
            <div className="logoBox">
                <img src={logo} alt="logo" className="logo"></img>
            </div>
            <div className="navBox">
                <div className="nav1">
                    <div>
                        <BsChatSquareHeartFill />
                    </div>
                    <p>테마 추천</p>
                </div>
                <div className="nav2">
                    <div>
                        <BsCollectionFill />
                    </div>
                    <p>테마 정보</p>
                </div>
                <div className="nav3">
                    <div>
                        <BsPersonFill />
                    </div>
                    <p>마이페이지</p>
                </div>
            </div>
        </Container>
    );
};
export default Navbar;
