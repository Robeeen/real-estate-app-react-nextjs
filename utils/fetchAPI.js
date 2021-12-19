import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchAPI = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '123456'
          }
    });
    return data;
}
