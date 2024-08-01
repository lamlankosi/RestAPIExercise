import { log } from "console";
import { config } from "dotenv";
config()
import express from "express";
import path from 'path'

const app = express()
const port = +process.env.PORT || 4000

app.use(express.static('./static'))

//homePage
app.get('/', (req,res) => {
    res.status(200).sendFile(path.resolve('./static/index.html'))
})

//aboutPage
app.get('/', (req,res) => {
    res.status(200).sendFile(path.resolve('./static/about.html'))
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})