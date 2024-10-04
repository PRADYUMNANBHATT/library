import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./config/pasport-jwt-strat.js";
import ConnectDb from "./config/configdb.js";
import passport from "passport";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
const db = process.env.DATABASE_URL;
ConnectDb(db);
let coresOption = {
  origin: process.env.FRONT_END_PORT,
  credentials: true,
  optionSuccessStatus: 200,
};
//cors middleware
app.use(cors(coresOption));
//cookieparser
app.use(cookieParser());
//api middleware
app.use(express.json());
//passport initialize
app.use(passport.initialize());
app.use("/api/user", userRoutes);
app.listen(port, () => {
  console.log(`server listen at port http://localhost:${port}`);
});
