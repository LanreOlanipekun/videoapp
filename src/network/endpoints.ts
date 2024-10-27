const BASE_URL = import.meta.env.VITE_API_URL;

const endpoints = {
  // Video endpoints
  getVideo: (id: string) => `${BASE_URL}/video/${id}`,
  getComments: (id: string) => `${BASE_URL}/video/comments/${id}`,
};
export default endpoints;
