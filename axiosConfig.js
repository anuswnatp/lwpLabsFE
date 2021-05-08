import axios from "axios"

//Custom axios instance
//oracle
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYyMDQ5MjgxNywiZXhwIjoxNjIzMDg0ODE3fQ.iGQXeIm9cbrQXYOBdAn_aatjhtJ8PWJ697z-S11k2bY"

//heroku
// const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxOTg5MzgzNSwiZXhwIjoxNjIyNDg1ODM1fQ.ylQY1dcTJzIvx11VZZvBasnstf7rNEFfy0oZby8Ii9Q"

//local dev
// const local= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxMjY5MzcyOCwiZXhwIjoxNjE1Mjg1NzI4fQ.jhuomVo3ojVc5Vws6TNKuUA_4c6TODchFK_CfUyRy1g"

const axiosInstance = axios.create({
  baseURL:
  "http://140.238.250.4", //heroku
  // "http://localhost:8001", //local
  headers: { Authorization: `Bearer ${token}` },
})

export default axiosInstance
