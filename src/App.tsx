import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./pages/MainPage";
import ThemeRecs from "./pages/ThemeRecs";
import ThemeRecsQuestions from "./pages/ThemeRecsQuestions";
import ThemeRecsResult from "./pages/ThemeRecsResult";
import ThemeList from "./pages/ThemeList";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import ReviewList from "./pages/ReviewList";
import KakaoRedirectHandler from "./pages/KakaoRedirectHandler";
import MyPage from "./pages/MyPage";
import PostReview from "./pages/PostReview";
import ReadReview from "./pages/ReadReview";

const App: React.FC = () => {
    useEffect(() => {
        AOS.init(); // AOS 초기화
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ThemeList />} />
                <Route path="/themeRecs" element={<ThemeRecs />} />
                <Route
                    path="/ThemeRecsQuestions"
                    element={<ThemeRecsQuestions />}
                />
                <Route path="/themeRecsResult" element={<ThemeRecsResult />} />
                <Route path="/userPage" element={<UserPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route
                    path="/auth/kakao/redirect"
                    element={<KakaoRedirectHandler />}
                />
                <Route path="/reviewList" element={<ReviewList />} />
                <Route path="/themeList" element={<ThemeList />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/postReview" element={<PostReview />} />
                <Route path="/reviews/:reviewId" element={<ReadReview />} />
            </Routes>
        </Router>
    );
};

export default App;
