import axiosInstance from "../../axiosConfig"

export const getAllCourses=async(trending)=>{
    const data= await axiosInstance.get("courses")
    // console.log(data,"=============courses");
    try{
        if(trending){
            return {
                err:null,
                data:data.data.filter(i=>i.trending)
            }
        }else return {
            err:null,
            data:data.data
        }
    }catch{
        return {
            err:"AWW Snap",
            data:data
        }
    }
}