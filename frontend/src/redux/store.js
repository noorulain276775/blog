// import {createStore} from '@reduxjs/toolkit';
import {createStore} from 'redux';
import rootReducerFile from './rootReducerFile';


const store = createStore(rootReducerFile)

export default store;