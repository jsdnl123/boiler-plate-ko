const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://james:wlstpghk0!@boiler-plate.smd3yyq.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
}).then(()=>console.log("MongoDB Connected...")).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


