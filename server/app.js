const express = require('express')
const cors = require("cors")
const {PORT, DATABASE_URI} = process.env
const indexRouter = require("./routes/indexRouter")
const DBCONNECT = require("./config")
const app = express();

app.use(express.json())
app.use(cors());

(() => {
    try{
        DBCONNECT(DATABASE_URI)
        app.use('/', indexRouter)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch(e) {
        console.log(e);        
    }
})()