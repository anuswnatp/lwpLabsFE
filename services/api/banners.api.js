import axiosInstance from "../../axiosConfig";

export const getBanners = async () => {
    let data = await axiosInstance.get("banners")
    try{
    return data.data;
    }
    catch{
        console.error(data);
    }
}