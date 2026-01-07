import express from "express"
import { addNewBlog, deleteBlog, fetchListOfBlogs, updateBlog } from "../controllers/Blog-controller.js"

const blogRouter = express.Router();

blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

export default blogRouter;
