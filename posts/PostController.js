import PostService from "./PostService.js";
// import Post from "./Post.js";

class PostController {
    async create (req, res) {
        try {
            const post = await PostService.createPost(req.body)
            console.log(post)
            res.json(post)
        } catch (error) {
            res.status(500).json(error)   
        }
    }

    async getPosts (req, res) {
        try {
            const posts = await PostService.getAllPosts();
            res.json(posts)
        } catch (error) {
            res.status(500).json(error)   
        }
    }

    async getPost (req, res) {
        try {
            const post = await PostService.getOnePost(req.params.id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async updatePost (req, res) {
        try {
            const post = await PostService.updatePost(req.body)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deletePost (req, res) {
        try {
            const post = await PostService.deletePost(req.params.id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new PostController()
