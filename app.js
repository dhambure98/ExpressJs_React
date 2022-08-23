// // https://expressjs.com/en/starter/hello-world.html

// const express = require('express')
// const app = express()
// const port = 4000

// //if we use object inside our app
// app.use(express.json());

// //day 01 Lecture record 08
// //localhost req 
// app.get('/', (req, res) => {
//     console.log('get request comming!');
//     res.send('get req came for / route')
// })

// //localhost req for customer
// app.get('/customer', (req, res) => {
//     console.log(req.body);
//     res.send('<h1>Customer get req coming !!! </h1>')
// })

// //localhost req for item
// app.get('/item', (req, res) => {
//     console.log('item get come');
//     res.send('<h1>Item get req coming !!! </h1>')
// })

// //id pass the params req --> quary 
// app.get('/customer/:id', (req, res) => {
//     console.log(req.params);
// })

// //id pass the quary req --> params
// app.get('/customer/:id', (req, res) => {
//     console.log(req.params.id);
// })

// app.listen(port, (req, res) => {
//     console.log(`Express app listening on port ${port}`);
// })

const express = require('express')
const user = require('./routes/user')
const item = require('./routes/item')
const customer = require('./routes/customer')
const order = require('./routes/order')
const orderDetail = require('./routes/orderDetail')

const app = express()
const port = 4000

app.use(express.json())

app.use('/customer', customer)
app.use('/item',  item)
app.use('/users', user)
app.use('/order', order)
app.use('/orderDetail', orderDetail)


app.listen(port, () => {
    console.log(`app starting on ${port}`);
})