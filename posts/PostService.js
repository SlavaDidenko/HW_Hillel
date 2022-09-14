import Post from "./Post.js";

class PostService {
    async createPost (post) {
        const newPost = await Post.create({...post})
        return newPost
    }

    async getAllPosts () {
        const posts = await Post.find();
        return posts;
    }

    async getOnePost (id) {
        if (!id) {
            throw new Error('No ID provided');
        }
        const post = await Post.findById(id)
        return post;
    }

    async updatePost (post) {
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        console.log(updatedPost.body)
        return updatedPost
    }

    async deletePost (id) {
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost
    }
}

export default new PostService();