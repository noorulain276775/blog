import {SET_ALL_CATEGORIES} from "../constants"

export const categoryData = (data=[], action) => {
    switch (action.type){
        case SET_ALL_CATEGORIES:
            return [...action.data]
        default:
            return data
    }
}