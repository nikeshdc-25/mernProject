import express from "express";
import notFoundHandler from "./middleware/notFoundMiddleware.js";
import errorHandler from "./middleware/errorMiddleware.js";
import logger from "./middleware/loggerMiddleware.js";

//routers import
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";
import uploadRouter from "./routes/uploadRouter.js";

//To set Cookies in the browser
import CookieParser from "cookie-parser";
import path from "path";


//Initialize express app
const app = express();

//middlewares
app.use(express.json());
app.use(CookieParser());
app.use(logger);
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));


//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/image", uploadRouter)

//error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export { app };
