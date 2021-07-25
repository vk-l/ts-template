import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;

//sample route
app.use("/", (req, res)=>{
    res.json({message: "Hello!"})
});

app.listen(PORT, ()=>{
    console.log(`Server started, listening on port: ${PORT}`);
})