const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log('listening port 3000')
});

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false}))
app.use(bp.json())

app.use('/form', express.static(__dirname+'/hola.html'));

app.get('/pic/:', function (req, res) {
  res.send('<img src="foto1.jpg">');
  console.log('pphoto');
});

app.get('/formData', function (req, res){
    console.log(req.body);
    res.send(req.body.email + ' Sent you a message: ' + req.body.message);
});

app.get('/aboutMe/:hobby', (req, res) =>{
    console.log(req.params);
});
