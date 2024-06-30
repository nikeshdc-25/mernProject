import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/apiError.js";

// @desc    Create a new product
// @route   POST /api/v1/products/addproduct
// @access  Private/Admin
const addProduct = asyncHandler(async (req, res) => {
    const { name, image, description, brand, category, price, countInStock } = req.body;
    const product = new Product({
        user: req.user._id,
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock,
        rating: 0,
        numReviews: 0
    });

    const addProduct = await product.save();
    res.status(201).send(addProduct);
});

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

// @desc    Get a product by ID
// @route   GET /api/v1/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    let product = await Product.findById(req.params.id).populate('user', 'name email');
    if (product) {
        res.send(product);
    } else {
        throw new ApiError(404, 'Product not found!');
    }
});

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        throw new ApiError(404, 'Product not found');
    }
});

export {addProduct, getProducts, getProductById, deleteProduct};
