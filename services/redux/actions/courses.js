import {
    COURSE_BATCH_FETCHED_ALL,
    COURSE_DATA_FETCHED_ALL
} from "./actionTypes"

/* dispatches action to set the Course data array */
export const setAllTrendingCourseData = (data) => ({
    type: COURSE_DATA_FETCHED_ALL,
    payload: data,
})

export const setAllTrendingBatchData= (data)=>({
    type: COURSE_BATCH_FETCHED_ALL,
    payload:data
})