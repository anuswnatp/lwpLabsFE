import axiosInstance from "../../axiosConfig"

export const getAllFreeDemo=async()=>{
    const data= await axiosInstance.get("/free-demos")
    try{
        return {
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