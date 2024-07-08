import { FETCH_BLOG_DATA, FETCH_ALL_BLOGS} from "./constants"

export const blogReducer = (data=[], action) => {
    switch (action.type){
        case FETCH_BLOG_DATA:
            console.log("HI I am a single blog fetching")
            return action.data

        case FETCH_ALL_BLOGS:
            console.log("HI I am all blogs fetching")
            return action.data

        default:
            return []
    }
}