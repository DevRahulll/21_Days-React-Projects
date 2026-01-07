import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connToDb from "./db/connToDb.js"
import blogRouter from "./route/blogRoute.js";

dotenv.config();
connToDb();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (_req, res) => {
    res.status(200).send("<h1>PONG ! From Rahul</h1>")
})

app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
})