import { FETCH_BLOG_DATA } from "./constants";

export const blogData = () => {
  console.warn("action called");
  return {
    type: FETCH_BLOG_DATA,
    data: "hello"
  };
};
