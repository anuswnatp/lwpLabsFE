import axiosInstance from "../../axiosConfig"

export const getTestimonials = async (trending = false) => {
    const data = await axiosInstance.get("/testimonials")
    try {
        if (trending) {
            let ar = data.data.filter(i => i.trending)
            // console.log(ar);
            return {
                err: null,
                data: ar
            }
        } else {
            return {
                err: null,
                data: data.data
            }
        }
    } catch {
        return {
            err: "AWW Snap",
            data: data
        }
    }
}
