import axios from "axios"

//Custom axios instance

// const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxMjIwNDI0MCwiZXhwIjoxNjE0Nzk2MjQwfQ.hRpt5mios6PQ3B8WU6u_szKUn2BTA45EduEExNF8f-g"
const local= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxMjY5MzcyOCwiZXhwIjoxNjE1Mjg1NzI4fQ.jhuomVo3ojVc5Vws6TNKuUA_4c6TODchFK_CfUyRy1g"
const axiosInstance = axios.create({
  baseURL: "http://localhost:8001",
  headers: { Authorization: `Bearer ${local}` },
})

export default axiosInstance