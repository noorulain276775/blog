import {configureStore} from '@reduxjs/toolkit'
import blogSaga  from './blogSaga'
import createSagaMiddleware from 'redux-saga'

import rootReducerFile from './rootReducerFile';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducerFile,
    middleware: ()=>[sagaMiddleware]
});

sagaMiddleware.run(blogSaga)

export default store;