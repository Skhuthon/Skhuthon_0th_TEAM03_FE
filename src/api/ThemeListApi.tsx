import axios from "axios";

// [get] 유저의 전체 다이어리 조회
export const getThemeList = async (
    page: number,
    title: string,
    region: string
) => {
    try {
        const response = await axios({
            method: "GET",
            url: "https://api.labyrinth30-edu.link/themes",
            params: {
                page: page,
                title: title,
                region: region,
            },
        });
        // 응답 결과 : id / title / difficulty / genre / store { id / name / reservationSite }
        // console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
