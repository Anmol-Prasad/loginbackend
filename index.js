import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routers/userRouter.js";
import Connection from "./Connection.js";
import cors from "cors";

dotenv.config();
const app = express();
const whitelist = ["http://localhost:3000"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };
const corsOptions = {
  origin: [
    "https://reactlogintest.netlify.app",
    "http://localhost:3000",
    "https://reactlogintest2.netlify.app",
  ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options("*", cors());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`App running successfully on ${port}`);
});
