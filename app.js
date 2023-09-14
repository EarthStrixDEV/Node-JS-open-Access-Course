const express = require('express')
const debug = require('debug')('app')
const app = express()
const port = 3000

app.get("/" ,(request ,response) => {
    response.send("Hello Born To Dev Co. ,LTD" + new Date().toLocaleTimeString())
})

app.listen(port ,() => {
    debug("listening on port " + port);
})