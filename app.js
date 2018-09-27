const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usdl = require('parse-usdl');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.use(express.bodyParser());

app.use(bodyParser.json());


app.listen(process.env.PORT||3600,()=>{
  console.log("Server started");
});


app.get('/',(req,res)=>{

res.render('index');

});

app.get('/ThankYou', (req,res)=>{

  res.sendFile(__dirname+'/views/ThankYou.ejs');
})

app.post('/endpoint',(req,res)=>{
let obj = req.body;

var dlData = usdl.parse(obj.replace(/\r/g, '\n'),{suppressErrors: true});
//
 console.log(JSON.stringify(dlData, null, 2));

res.send(JSON.stringify(dlData, null, 2));

})
