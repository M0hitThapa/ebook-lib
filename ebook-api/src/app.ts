import express from "express"
import cors from "cors";

import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import { config } from "./config/config";

const app = express();


app.use(cors({
    origin: config.frontendDomain,
}
))
app.use(express.json())

app.get('/', (req,res) => {
    
    
   
   
res.json({message:"welcome to ebook apis"})
});

app.use('/api/users', userRouter)
app.use('/api/books', bookRouter)


app.use(globalErrorHandler);




export default app;