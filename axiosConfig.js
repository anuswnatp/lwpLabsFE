import axios from "axios"

//Custom axios instance
// import Cookies from "js-cookie"
// const samlCookie= Cookies.get('saml_response')
// let samlToken=samlCookie?JSON.parse(samlCookie.substr(2,samlCookie.length)):null;
// const token=samlToken? samlToken.token:null;
// const token =
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzY3OTA5OTQxMzQ1ODc3OSIsIm5hbWUiOiJadWxsaWcgUGhhcm1hIiwiaWF0Ijo4NzU2MjMwMDk4fQ.tpuVnsAWSjeWtwEFbyDteEZYN4BGOz82EOq9pgkBJik"
const axiosInstance = axios.create({
  baseURL: "/api"
//   headers: { Authorization: `Bearer ${token}` },
})

export default axiosInstance