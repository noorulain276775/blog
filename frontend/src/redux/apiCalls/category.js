import { API_URL } from "../../apiConstants";
import axios from "axios";

export function requestGetCategory() {
  const url = `${API_URL}/categories/`;
  return axios.request({
    method: "get",
    url: url,
  });
}
