import axios from 'axios';

const api = axios.create({
  baseURL: 'http://zlaja.live:3005',
});

export const getPlanetData = async (planet) => {
  try {
    const {data} = await api.get(`/${planet}`);
    return data;
  } catch (error) {}
};
