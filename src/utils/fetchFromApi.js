import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY_RAPID_API_KEY,
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "0d852ac261msh1eebc1eaecf4c24p1447e0jsnf13b2fa1c791",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
}