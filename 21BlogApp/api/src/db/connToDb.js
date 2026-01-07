import mongoose from "mongoose"

mongoose.set("strictQuery", false);

const connToDb = () => {
    try {
        const conn = mongoose.connect(process.env.DB_URI);
        console.log("DB connected Successfully!!!")
    } catch (error) {
        console.log("Errror in connecting DB!!!", error)
    }
}

export default connToDb;