import mongoose from "mongoose"

export const connectDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URL, () => {
        const db = mongoose.connection
        db.on("error", (error) => {
            console.log(error)
            console.log("Error Occured")
        })
        db.once("open", () => {
            console.log("Database Successfully Connected")
        })
    })


}