import {
    COURSE_BATCH_FETCHED_ALL,
    COURSE_DATA_FETCHED_ALL,
    ALL_COURSE_DATA
} from "../actions/actionTypes"

const initialState = {
    allCourses: [],
    trendingCourses: [],
    trendingBatches: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_COURSE_DATA : {
            return {
                ...state,
                allCourses: payload
            }
        }
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
