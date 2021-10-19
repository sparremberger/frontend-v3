import axios from "axios";
import {
    COMMENT_LIST_FAIL,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_REQUEST,
} from "../constants/commentConstants";

export const listComments = () => async (dispatch) => {
    try {
        dispatch({ type: COMMENT_LIST_REQUEST });
        const { data } = await axios.get("/api/comments");
        dispatch({ type: COMMENT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: COMMENT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
