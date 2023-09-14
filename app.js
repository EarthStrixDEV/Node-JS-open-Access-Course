const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const productRouter = express.Router()

app.use(express.json())

app.set('views' ,"./src/view")
app.set('view engine' ,'ejs')

productRouter.route('/').get((request ,response) => {
    response.send('Hello World ,I\'m products 0')
})

productRouter.route('/1').get((request ,response) => {
    response.send('Hello World ,I\'m products 1')
})

app.use('/products' ,productRouter)

app.get('/', (request ,response) => {
    response.render('index' ,{username: 'EarthStrix' ,customer: ['Earth','Pim','May']})
})

app.listen(port ,() => {
    console.log("listening on port " + port);   
})