import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    name: String, 
    comment: String,
    rating: Number,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});


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
        enum: ["Electronics", "Clothing", "Vape", "Electric", "Kitchenware", "Furniture"]
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    reviews: [reviewSchema]
},
{timestamps: true}
);

const Product = mongoose.model("Product", productSchema);
export default Product;