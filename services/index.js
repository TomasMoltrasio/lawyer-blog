const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  posts: {
    getAllPost: () => `${API_URL}/${API_VERSION}/post`,
    getPost: (id) => `${API_URL}/${API_VERSION}/post/${id}`,
    createPost: () => `${API_URL}/${API_VERSION}/post`,
    updatePost: (id) => `${API_URL}/${API_VERSION}/post/${id}`,
    deletePost: (id) => `${API_URL}/${API_VERSION}/post/${id}`,
  },
};

export default endPoints;
