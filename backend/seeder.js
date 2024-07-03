import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import connectDB from './config/db.js';

process.loadEnvFile();      //To load .env

connectDB();
async function importData(){
    let newusers = await User.insertMany(users);
    console.log(newusers);
    process.exit();
}

importData();