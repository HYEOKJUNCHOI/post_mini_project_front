import { api } from "../../apis/config/axiosConfig"

export const createPost = (FormData) =>{
    return api.post("/api/posts", FormData);
}

export const getFeeds = (params) => {
    return api.get("/api/posts/feeds", {params});
}