let mongoose = require("mongoose");
require('dotenv').config()
let DataBase = async () => {
    await mongoose.connect(process.env.Mongo_URL);
    try {
    console.log("Mongodb connected Successfully");
    } 
    catch (error) {
    console.log(error);
}
};

module.exports = DataBase