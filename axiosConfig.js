import axios from "axios"

//Custom axios instance

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxOTg5MzgzNSwiZXhwIjoxNjIyNDg1ODM1fQ.ylQY1dcTJzIvx11VZZvBasnstf7rNEFfy0oZby8Ii9Q"
// const local= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxMjY5MzcyOCwiZXhwIjoxNjE1Mjg1NzI4fQ.jhuomVo3ojVc5Vws6TNKuUA_4c6TODchFK_CfUyRy1g"
// const local= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYxODk0MTc1NSwiZXhwIjoxNjIxNTMzNzU1fQ.INajcKpVYI_3i3b60qQgGV0l3pVFfD5X85tfzn-dPMM"
const axiosInstance = axios.create({
  baseURL:"https://evening-mesa-71677.herokuapp.com", //heroku
  // "http://localhost:8001", //local
  headers: { Authorization: `Bearer ${token}` },
})

export default axiosInstance
