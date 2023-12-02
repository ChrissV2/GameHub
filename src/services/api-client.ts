import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3b93dbb5f5384ac7931d283e6b36f82d",
  },
});
