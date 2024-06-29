import { BsPersonFill } from "react-icons/bs";
import { Container } from "../styles/UserPageStyled";
import ReviewTheme from "../components/ReviewTheme";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import axios from "axios";

const UserPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (code) {
            console.log('인가 코드:', code);  // 인가 코드를 콘솔에 출력

            // 백엔드로 인가 코드를 POST 요청
            axios.post('https://api.labyrinth30-edu.link/auth/kakao/redirect', { code })
                .then(response => {
                    const { access_token } = response.data;
                    localStorage.setItem('kakao_token', access_token);
                    navigate('/userPage'); // 로그인 후 이동할 페이지로 리디렉션
                })
                .catch(error => {
                    console.error('Error:', error);
                    navigate('/loginPage'); // 로그인 실패 시 로그인 페이지로 리디렉션
                });
        } else {
            console.error('인가 코드가 없습니다.');
            navigate('/loginPage'); // 인가 코드가 없을 경우 로그인 페이지로 리디렉션
        }
    }, [navigate]);
    

    return (
        <>
            <Container>
                <div>
                    <div>당신을 위한 방,</div>
                    <div>userName님의 방탈출 일지</div>
                    <div>
                        <NavLink to='/reviewWriting'>+ 리뷰 작성</NavLink>
                    </div>
                </div>
                <div>
                    <ReviewTheme />
                    <ReviewTheme />
                </div>
            </Container>
        </>
    );
};
export default UserPage;