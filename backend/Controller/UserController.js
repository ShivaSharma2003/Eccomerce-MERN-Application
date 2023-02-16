import user from '../Models/UserModel.js'
import { generateToken } from '../Utils/GenerateToken.js'

const RegisterUser = (async (req, res) => {
    const { email, password, gender, userName } = req.body
    try {
        const isEmailExist = await user.findOne({ email: email })
        if (isEmailExist) {
            res.status(403).json({ errorMessage: "email already exists" })
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

const LoginUser = (async (req, res) => {

    const { email, password } = req.body
    try {
        const isEmailExist = await user.findOne({ email: email })
        if (!isEmailExist) {
            res.status(404).json({ errorMessage: "Oops!! User not found" })
        }
        else {
            const userPasswordCorrect = await isEmailExist.ComparePassword(password)
            if (userPasswordCorrect) {
                const Authorizeduser = await user.findOne({ email: email }).select("-password")
                res.status(200).json({ token: generateToken(Authorizeduser._id) })
            } else {
                res.status(403).json({ errorMessage: "Invalid password" })
            }
        }

    } catch (error) {
        res.status(500).json({ errorMessage: "Internal Server Error" })
        console.log(error)
    }
})

const FetchUser = (async (req, res) => {
    try {
        const Fetcheduser = await user.findById(req.user).select('-password')
        if (!Fetcheduser) {
            res.status(404).json({ errorMessage: "User Not Found!!!" })
        }
        res.status(200).json(Fetcheduser)
    } catch (error) {
        res.status(500).json({ errorMessage: 'Internal Server Error' })
    }
}
)

export { RegisterUser, LoginUser, FetchUser }