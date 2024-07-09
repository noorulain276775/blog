import {takeEvery} from 'redux-saga/effects'
import { FETCH_ALL_BLOGS } from './constants';
import { handleBlogs } from './handler/blogs';



function* blogSaga(){
    yield takeEvery(FETCH_ALL_BLOGS, handleBlogs)


}

export default blogSaga;