import React, { useEffect } from "react";
import KakaoLogin from "./KakaoLogin"; // Kakao 로그인 버튼 컴포넌트
import { Container } from "../styles/LoginPageStyled";

const LoginPage: React.FC = () => {
  useEffect(() => {
    const initializeKakao = () => {
      console.log("Kakao SDK 초기화 시도"); // 로그 추가
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("458c6e177d255cd6277b97d9a180e2b6"); // 여기에 Kakao 앱의 JavaScript 키 입력
        console.log("Kakao SDK 초기화 완료"); // 초기화 완료 로그
      } else if (window.Kakao) {
        console.log("Kakao SDK 이미 초기화됨"); // 이미 초기화된 경우 로그
      } else {
        console.error("Kakao 객체를 찾을 수 없음"); // Kakao 객체가 없는 경우 로그
      }
    };

    const script = document.createElement('script');
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;
    script.onload = initializeKakao;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <div className="loginBtn">
        <KakaoLogin />
      </div>
    </Container>
  );
};

export default LoginPage;
