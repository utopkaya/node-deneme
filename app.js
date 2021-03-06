const express = require('express')
const app = express()

const hostname = 'localhost'
const port = 3000

app.get('/', (req,res) => {
    res.send('merhaba kbu ieee!')
})

app.listen(port,hostname, ()=>{
    console.log(`server adresi : http://${hostname}:${port}`)
})
