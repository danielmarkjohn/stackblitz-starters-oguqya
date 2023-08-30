import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
