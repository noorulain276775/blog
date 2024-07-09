import { API_URL } from "../../apiConstants";
import axios from "axios";

export function requestGetBlogs() {
    const url = `${API_URL}/articles/`
    return axios.request({
      method: "get",
      url: url,
    });
  }