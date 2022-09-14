import mongoose from "mongoose";

const Post = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: String, required: true },
})

export default mongoose.model('Post', Post);