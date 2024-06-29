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
            console.log('code', code);

            const response = await axios.post(
                "https://api.labyrinth30-edu.link/auth/kakao/redirect",
                {
                    params: { code },
                }
            );
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/themeRecs");
            console.log(response);
        } catch (error) {
            console.log('123', error);
        }
    };

    useEffect(() => {
        if (code) {
            login();
        }
    }, []);
    return (
        <div>로그인 중..</div>
    );
};
export default KakaoRedirectHandler;
