require("dotenv").config();
const connectDatabase = require("./config/database");

const express = require("express");
const productRoutes = require("./routes/productRoutes");
connectDatabase();
const app = express();
app.use(express.json());
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`------- Server is running on ${PORT} -------`)
);
