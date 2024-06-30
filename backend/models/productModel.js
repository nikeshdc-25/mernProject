import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    name: String, 
    comment: String,
    rating: Number,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
{timestamps: true}
);

const productSchema = new mongoose.Schema({
    user:{              //Foreign Key from User
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name:{
        type: String,
        required: true
    },
    image: String,
    description: String,
    brand:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Electronics", "Clothing", "Vape", "Electronics", "Kitchenware", "Furniture"]
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    rating: Number,
    numReview: Number,
    reviews: {reviewSchema}
},
{timestamps: true}
);



const Product = mongoose.model("Product", productSchema);
export default Product;