import {takeEvery} from 'redux-saga/effects'
import { FETCH_ALL_BLOGS, FETCH_CATEGORIES } from './constants';
import { handleBlogs } from './handler/blogs';
import { handleCategories } from './handler/category';



function* blogSaga(){
    yield takeEvery(FETCH_ALL_BLOGS, handleBlogs)
    yield takeEvery(FETCH_CATEGORIES, handleCategories)


}

export default blogSaga;