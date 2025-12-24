import { api } from "../../apis/config/axiosConfig"

export const createComment = (postid, data) => {

    return api.post(`/api/posts/${postid}/comments`, data);
}