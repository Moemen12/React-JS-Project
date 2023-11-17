import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
authFetch.interceptors.request.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
  }
);

export default authFetch;
