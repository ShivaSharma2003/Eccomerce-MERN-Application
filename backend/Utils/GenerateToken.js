import jwt from 'jsonwebtoken'
const generateToken = (id) => {
    const generatedToken = jwt.sign({ id }, process.env.JWT_SCERET_STRING, { expiresIn: '15d' })
    return generatedToken;
}
export { generateToken }

