import {
    COURSE_BATCH_FETCHED_ALL,
    COURSE_DATA_FETCHED_ALL
} from "../actions/actionTypes"

const initialState = {
    trendingCourses: [],
    trendingBatches: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case COURSE_DATA_FETCHED_ALL: {

            return {
                ...state,
                trendingCourses:payload
            }
        }
        case COURSE_BATCH_FETCHED_ALL: {
            return  {
                ...state,
                trendingBatches:payload}
        }
        default:
            return state
    }
}
