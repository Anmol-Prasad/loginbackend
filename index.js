import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routers/userRouter.js";
import Connection from "./Connection.js";
import cors from "cors";

dotenv.config();
const app = express();
const whitelist = ["http://localhost:3001"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
// app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/user", userRoutes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`App running successfully on ${port}`);
});
