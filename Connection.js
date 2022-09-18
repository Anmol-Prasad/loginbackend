import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://firevol:${password}@cluster0.dbiaj37.mongodb.net/database`;
  try {
    await mongoose.connect(
      URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Connected to Database Successfully");
        res.json("Connected");
      }
    );
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
