import { SET_BLOG_LIST} from "../constants"

export const blogData = (data=[], action) => {
    switch (action.type){
        case SET_BLOG_LIST:
            return [...action.data]
        default:
            return data
    }
}