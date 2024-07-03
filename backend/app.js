import express from 'express';
import notFoundHandler from './middleware/notFoundMiddleware.js';
import errorHandler from './middleware/errorMiddleware.js';
import logger from './middleware/loggerMiddleware.js';


//routers import
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import CookieParser from 'cookie-parser';



//Initialize express app
const app = express();


//middlewares
app.use(express.json())
app.use(CookieParser())
app.use(logger)


//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);


//error handlers
app.use(notFoundHandler);
app.use(errorHandler)

export {app};
