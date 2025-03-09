import express from "express"

const app = express();



app.get('/', (req,res) => {
res.json({message:"welcome to ebook apis"})
})


export default app;