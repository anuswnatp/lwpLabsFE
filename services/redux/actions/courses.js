import {
    COURSE_BATCH_FETCHED_ALL,
    COURSE_DATA_FETCHED_ALL,
    ALL_COURSE_DATA
} from "./actionTypes"

/* dispatches action to set the Course data array */
export const setAllTrendingCourseData = (data) => ({
    type: COURSE_DATA_FETCHED_ALL,
    payload: data,
})

export const setAllCourseData = (data) => ({
    type: ALL_COURSE_DATA,
    payload: data
})

export const setAllTrendingBatchData= (data)=>({
    type: COURSE_BATCH_FETCHED_ALL,
    payload:data
})