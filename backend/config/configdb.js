import mangoose from "mongoose";

const ConnectDb = async (DATABASE_URL) => {
  try {
    // dbOptions = {
    //   dbName: "librarydb",
    // };
    await mangoose.connect(DATABASE_URL);
    console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default ConnectDb;
