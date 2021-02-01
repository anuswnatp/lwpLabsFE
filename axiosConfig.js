import axios from "axios"

//Custom axios instance

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxMjIwNDI0MCwiZXhwIjoxNjE0Nzk2MjQwfQ.hRpt5mios6PQ3B8WU6u_szKUn2BTA45EduEExNF8f-g"
const axiosInstance = axios.create({
  baseURL: "https://evening-mesa-71677.herokuapp.com",
  headers: { Authorization: `Bearer ${token}` },
})

export default axiosInstance