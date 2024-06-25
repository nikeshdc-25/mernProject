import express from 'express';
import notFoundHandler from './middleware/notFoundMiddleware.js';
// import errorHandler from "./";
// import logger from "./";

//routers import
import userRouter from "./routes/userRouter.js";


//Initialize express app
const app = express();
//middlewares
app.use(express.json())
// app.use(logger);

//routes
app.use("/api/v1/users", userRouter);

//error handlers
app.use(notFoundHandler);
// app.use(errorHandler);

export {app};
