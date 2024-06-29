import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface KakaoUser {
  nickname: string;
  profile_image: string;
}

const MyPage: React.FC = () => {
  const [user, setUser] = useState<KakaoUser | null>(null);

  useEffect(() => {
    const fetchKakaoUserInfo = async () => {
      const token = localStorage.getItem('kakao_token');
      if (token) {
        try {
          const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const { properties } = response.data;
          setUser({
            nickname: properties.nickname,
            profile_image: properties.profile_image,
          });
        } catch (error) {
          console.error('Failed to fetch Kakao user info', error);
        }
      }
    };

    fetchKakaoUserInfo();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Page</h1>
      <img src={user.profile_image} alt={user.nickname} />
      <h2>{user.nickname}</h2>
    </div>
  );
};

export default MyPage;