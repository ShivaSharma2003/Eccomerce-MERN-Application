import jwt from 'jsonwebtoken'

const Authorized = (async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1] 
            const decodedToken = jwt.verify(token , process.env.JWT_SCERET_STRING)
            req.user = decodedToken.id
            next()
        } catch (error) {
            res.status(500).json({ errorMessage: "Invalid Signature" })
            console.log(error)
        }
    } else {
        res.status(403).json({ errorMessage: "token not found" })
    }
})

export default Authorized



