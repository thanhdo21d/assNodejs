import { string } from "joi";
import { mongoose } from "mongoose";
const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
})
export default mongoose.model("Product", productSchema)