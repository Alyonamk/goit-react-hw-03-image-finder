import axios from 'axios';

const URL = 'https://pixabay.com/api';
const KEY = '36361417-632767568e20d2a1480fe9597';

export const makeRequest = async (nextPage,nextName) => {
  const responsive = await axios.get(
    `${URL}/?q=${nextName}&page=${nextPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responsive.data;
};

