import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoRedirectHandler = () => {
    console.log("로그인중...");
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    const login = async () => {
        try {
            console.log("로그인시작!!!!!!!!----------");
            const response = await axios.post(
                "https://api.labyrinth30-edu.link/auth/kakao/redirect",
                {
                    code,
                }
            );
            console.log("로그인해볼게요---------------");
            console.log(response);
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("username", response.data.nickname);

            console.log(response);

            navigate("/mypage");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (code) {
            login();
        }
    }, []);
    return <div>로그인 중..</div>;
};
export default KakaoRedirectHandler;
