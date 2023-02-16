import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';

// structure 
const UserSchema = mongoose.Schema({
    Username:
    {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
    },
    password:
    {
        type: String,
        required: true
    },
    gender:
    {
        type: String,
    },
    Avatar:
    {
        type: String,
        default: "https://i.pravatar.cc/150?img=31"
    },
    address:
    {
        type: String,
    },

},
    {
        timestamps: true
    }
)

UserSchema.pre("save", (async function(next){
    const salt = await bcryptjs.genSalt(8) 
    this.password = await bcryptjs.hash(this.password, salt)
    next()
}))

UserSchema.methods.ComparePassword = async function (password){
    return await bcryptjs.compare(password , this.password)
} 

//retrun bool true && false

const user = mongoose.model("User", UserSchema)

export default user