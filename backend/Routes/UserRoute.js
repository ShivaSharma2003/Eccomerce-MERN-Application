import express from "express";
import {RegisterUser , LoginUser , FetchUser} from '../Controller/UserController.js'
import Authorize from '../MiddleWare/AuthorizeMiddleware.js'

const router = express.Router()

// http:localhost:4000/api/user/post/register
router.post('/api/user/post/register',RegisterUser)


// http://localhost:4000/api/user/post/login
router.post("/api/user/post/login", LoginUser)


// http://localhost:4000/api/user/fetch
router.get('/api/user/fetch', Authorize, FetchUser)
export default router;
