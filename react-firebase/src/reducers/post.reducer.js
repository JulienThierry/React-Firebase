import { GET_POSTS } from "../actions/post.action";

const initalState = {}

export default function postReducer(state = initalState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        default:
            return state;
    }
}