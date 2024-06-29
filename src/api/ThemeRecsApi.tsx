import axios from "axios";

// [get] 유저의 전체 다이어리 조회
export const postThemeRecs = async (
    difficulty: string,
    genre: string,
    region: string
) => {
    try {
        const response = await axios({
            method: "POST",
            url: "https://api.labyrinth30-edu.link/themes/suggest",
            data: {
                difficulty: difficulty,
                genre: genre,
                region: region,
            },
        });

        // 응답 결과
        // console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
