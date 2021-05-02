import axiosInstance from "../../axiosConfig"

export const getAllBatches= async (trending=false)=>{
    let data=await axiosInstance.get(`/courses/getBatches/${trending}`)
    try{
        console.log(data);
        return data.data
    }catch{
        console.error(data);
        return null
    }
}