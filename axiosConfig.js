import axios from "axios"

//Custom axios instance
//oracle
// const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTE3NGVkOThjZjIwMDI1ZTI2NjRjMiIsImlhdCI6MTYyMzA5NjU5NCwiZXhwIjoxNjI1Njg4NTk0fQ.XH94x9rCm0f45bT4KNGrrPzpx7QK5OtyA0AaKkqYupE"
if (getCookie("token") === false) {
  let d= typeof document === 'undefined' ? null : document
  axios.post("https://admin.lwplabs.com/auth/local", {
    "identifier": "anuswantp1998@gmail.com",
    "password": "Justgonemad@00"
  }).then(data => {
    function setCookie(cname, cvalue, exdays) {
      let d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    // setCookie("token", data.data.jwt, 2)
    setToken(data.data.jwt)
    // window.location.reload()
  })
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(d?.cookie || "dummy;hello");
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

const axiosInstance = axios.create({
  baseURL: "https://admin.lwplabs.com", //oracle
  // "http://localhost:8001", //local
  headers: { Authorization: `Bearer ${getCookie("token")}` },
})

export default axiosInstance
