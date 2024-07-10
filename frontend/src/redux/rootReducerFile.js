import { combineReducers } from "redux";
import { blogData } from "./reducers/blogReducer";
import { categoryData } from "./reducers/categoryReducer";



export default combineReducers({
    blogData,
    categoryData
})