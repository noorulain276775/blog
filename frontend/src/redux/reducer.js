import { FETCH_BLOG_DATA, POST_BLOG_DATA} from "./constants"

export const blogReducer = (data=[], action) => {
    console.warn("reducer called", action)
    if (action.type===FETCH_BLOG_DATA){
        return 4500

    }else{
        return "no action called"
    }
}