import axios from 'axios';

const getImages = async (dataCategory, dataPage) => {
  try {
    const { data } = await axios.get(`https://agile-springs-56924.herokuapp.com/api/images/${dataCategory}?page=${dataPage}`);
    return data;
  } catch (err) {
    return null;
  }
};

export default { getImages };
