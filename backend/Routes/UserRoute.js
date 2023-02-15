import express from "express";
import user from '../Models/UserModel.js'
const router = express.Router()

// http:localhost:4000/api/post/user
router.post('/api/user/post', async (req, res) => {
    const { email, password, gender, userName } = req.body
    try {
        const isEmailExist = await user.findOne({ email: email })
        if (isEmailExist) {
            res.status(403).json({errorMessage : "email already exists"})
        }
        const Newuser = await user.create(
            {
                email: email,
                password: password,
                Username: userName,
                gender: gender,
            }
        )
        if (Newuser) {
            res.status(200).json(Newuser)
        } else {
            console.log("Something wrong Happend")
        }
    } catch (error) {
        console.log(error)
    }
})
export default router;
