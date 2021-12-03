import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchAPI = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7b0ac2e0eamshbeeee8cf5e79db9p1ed9c3jsn7f1d8244e3bf'
          }
    });
    return data;
}
