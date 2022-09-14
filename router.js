import Router from 'express'
import PostController from './posts/PostController.js';
const router = new Router()

router.post('/', PostController.create);

router.get('/', PostController.getPosts)
router.get('/user/:id', PostController.getPost)
router.put('/', PostController.updatePost)
router.delete('/user/:id', PostController.deletePost)

export default router;