import {retry, put} from "redux-saga/effects";
import { requestGetBlogs } from "../apiCalls/blogs";
import { SET_BLOG_LIST } from "../constants";

export function* handleBlogs(action){
    try{
        const response = yield retry(0,0, requestGetBlogs)
        const data = response.data
        yield put({type: SET_BLOG_LIST, data})

    }catch(error){
        console.log("---------------data--------", error)

    }

}