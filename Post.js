import mongoose from "mongoose";

const Post = new mongoose.Schema({
    token: {type: String},
    url: {type: String}
})

export default mongoose.model('Post', Post)