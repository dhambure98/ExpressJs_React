// https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 4000

//localhost req 
app.get('/', (req, res) => {
    console.log('get request comming!');
    res.send('get req came for / route')
})

//localhost req for customer
app.get('/customer', (req, res) => {
    console.log('customer get come');
    res.send('<h1>Customer get req coming !!! </h1>')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})