import mongoose from "mongoose";

const connectDB = () => {
  var isConnected = false;
  if (!isConnected) {
    mongoose
      .connect("mongodb://127.0.0.1:27017", {
        dbName: "Winner",
      })
      .then(() => {
        console.log("DB Connected!");
        isConnected = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default connectDB;
