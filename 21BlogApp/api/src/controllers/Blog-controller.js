import mongoose from "mongoose";
import Blog from "../model/Blog.js"

//fetch , add, update, delete

export const fetchListOfBlogs = async (req, res) => {
    let blogList;
    try {
        blogList = await Blog.find();

        if (!blogList) {
            return res.status(404).json({ message: "No Blogs Found" })
        }

        return res.status(200).json({ blogList })
    } catch (error) {
        console.log("Error in fetching Blogs", error);
        return res.status(404).json({ message: "Something went Wrong!" })
    }
}

export const addNewBlog = async (req, res) => {
    const { title, description } = req.body;
    const currentDate = new Date();

    try {
        const newlyCreateBlog = new Blog({
            title,
            description,
            date: currentDate
        });

        await newlyCreateBlog.save();

        const session = await mongoose.startSession();
        session.startTransaction();
        await newlyCreateBlog.save(session);
        session.commitTransaction();

        return res.status(200).json({ newlyCreateBlog })

    } catch (error) {
        console.log("Error in Creating Blogs", error);
        return res.status(404).json({ message: "Something went Wrong!" })
    }
}

export const updateBlog = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;

    let currentBlogToUpdate;

    try {
        currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
            title,
            description,
        });

        if (!currentBlogToUpdate) {
            return res.status(500).json({ message: "Unable to update" });
        }

        return res.status(200).json({ currentBlogToUpdate });

    } catch (error) {
        console.log("Error in Updating Blog", error);
        return res.status(404).json({ message: "Something went Wrong!" })
    }
}

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const findCurrentBlog = await Blog.findByIdAndDelete(id);

        if (!findCurrentBlog) {
            return res.status(404).json({ message: "Blog not Found!" })
        }

        return res.status(200).json({ message: "Successfully Deleted!" })
    } catch (error) {
        console.log("Error in Deleting Blog", error);
        return res.status(404).json({ message: "Something went Wrong!" })
    }
}