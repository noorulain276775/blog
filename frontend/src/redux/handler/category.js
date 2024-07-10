import { retry, put } from "redux-saga/effects";
import { requestGetCategory } from "../apiCalls/category";
import { SET_ALL_CATEGORIES } from "../constants";

export function* handleCategories(action) {
  try {
    const response = yield retry(0, 0, requestGetCategory);
    const data = response.data;
    yield put({type: SET_ALL_CATEGORIES, data})
  } catch (error) {
    console.log("---------------data--------", error);
  }
}
