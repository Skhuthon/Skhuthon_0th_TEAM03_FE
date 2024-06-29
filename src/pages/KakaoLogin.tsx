import React from "react";
import loginBtn from '../image/kakao_login_img.png'

const KakaoLogin: React.FC = () => {
    const loginWithKakao = () => {
        if (window.Kakao && window.Kakao.Auth) {
          window.Kakao.Auth.authorize({
            redirectUri: "http://localhost:3000/auth/kakao/redirect", // 설정한 리디렉션 URI 입력
          });
        } else {
          console.error("Kakao SDK가 초기화되지 않았습니다.");
        }
      };
    
      return (
        <div>
          <a id="kakao-login-btn" href="#" onClick={loginWithKakao}>
            <img src={loginBtn} width="222" alt="카카오 로그인 버튼" />
          </a>
          <p id="token-result"></p>
        </div>
      );
};

export default KakaoLogin;
