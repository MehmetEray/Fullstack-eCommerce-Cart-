require("dotenv").config();

const productData = require("./data/product");
const connectDatabase = require("./config/database");
const Product = require("./models/Product");

connectDatabase();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
