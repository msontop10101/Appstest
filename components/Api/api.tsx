import axios from "axios"

const api = axios.create({
    baseURL: "https://appstest-test-api.herokuapp.com"
})

export const getTests = () => api.get("/test").then(res=> res.data)
export const getBugLists = () => api.get("/bugList").then(res => res.data)