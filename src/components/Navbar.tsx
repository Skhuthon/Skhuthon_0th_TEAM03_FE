import React from "react";
import { Container, NavLink } from "../styles/NavbarStyled";
import logo from "../image/bangpro_logo.png";
import { BsChatSquareHeartFill } from "react-icons/bs";
import { BsCollectionFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <Container>
            <NavLink to={`/themeList`}>
                <div className="logoBox">
                    <img src={logo} alt="logo" className="logo"></img>
                </div>
            </NavLink>

            <div className="navBox">
                <NavLink to={`/themeRecs`}>
                    <div className="nav">
                        <div>
                            <BsChatSquareHeartFill />
                        </div>
                        <p>테마 추천</p>
                    </div>
                </NavLink>

                <NavLink to={`/themeList`}>
                    <div className="nav">
                        <div>
                            <BsCollectionFill />
                        </div>
                        <p>테마 정보</p>
                    </div>
                </NavLink>

                <NavLink to={`/userPage`}>
                    <div className="nav">
                        <div>
                            <BsPersonFill />
                        </div>
                        <p>마이페이지</p>
                    </div>
                </NavLink>
            </div>
        </Container>
    );
};
export default Navbar;
