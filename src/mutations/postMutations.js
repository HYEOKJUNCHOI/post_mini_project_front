import { useMutation } from "@tanstack/react-query";
import { createPost } from "../apis/posts/postsApi";
import { createComment } from "../components/post/commentsApi";

export const useCreatePostMutation = () => useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (data) => {
        return await createPost(data);
    }
});

export const useCreatePostCommentMutation = () => useMutation({
    mutationKey:["createPostComment"],
    mutationFn: async ({postId, data}) => {
        return await createComment(postId, data);
    }
});