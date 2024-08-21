const express = require('express')
const app = express()
var cors = require('cors')

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use(cors())


app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == 'dog'){
        res.json({'sound' : '멍멍'})    
    }
    else if(name == "cat"){
        res.send({'sound' : '야옹'})        
    }
    else if(name == "pig"){
        res.send({'sound' : '꿀꿀'})        
    }
    else{
        res.send({'sound' : '알수없음'})            
    }

})

app.get('/cat', function (req, res) {
    res.send('고양이')
})


app.listen(3000)