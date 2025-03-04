const express = require("express");
require("dotenv").config();
const productRouter = require("./router/productsRouter");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.error(err));


app.use("/api/products", productRouter);

// 404 handler 
app.use((req, res, next) => {
    res.status(404).json({
        message: "Product does not exist!"
    });
});

// error handler
app.use((req, res, next) => {
    if(err.message){
        res.status(500).json({
            message: err.message
        });
    }else{
        res.status(500).json({
            message: "An unknown error occurred!"
        });
    }
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
