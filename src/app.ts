import express from "express"

import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import createBook from "./book/bookController";

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    
    
   
   
res.json({message:"welcome to ebook apis"})
});

app.use('/api/users', userRouter)
app.use('/api/books', createBook)


app.use(globalErrorHandler);




export default app;