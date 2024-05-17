import axios from "axios";



const fetchPostsData = async () => {
    try {
      const endpoint = `http://localhost:3001/api/v1/postings?`;
      const response = await axios.get(endpoint);
      return response.data;
    } catch (err) {
      throw new Error('failed to fetch posts');
    }
  };

export {fetchPostsData}