import mongoose from "mongoose";

const connectDB = () => {
  var isConnected = false;
  if (!isConnected) {
    mongoose
      .connect("mongodb+srv://sssammo7:HxlBxkAddlctNE5K@cluster0.lxb8ypk.mongodb.net", {
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
