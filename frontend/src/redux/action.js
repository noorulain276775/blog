import { FETCH_BLOG_DATA, FETCH_ALL_BLOGS } from "./constants";

export const blogsData = () => {
  return {
    type: FETCH_ALL_BLOGS,
    data: "I am all blogs"
  };
};


export const blogData = ()=> {
  return {
    type: FETCH_BLOG_DATA,
    data: "I am single blog"
  }
}