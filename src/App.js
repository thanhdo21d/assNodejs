import { express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product";
dotenv.config();
const app = express();
app.use('./api', productRouter)
mongoose.connect(process.env.URI)
export default viteNodeApp = app