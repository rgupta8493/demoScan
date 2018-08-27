const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));


app.listen(process.env.PORT||3600,()=>{
  console.log("Server started");
});


app.get('/',(req,res)=>{

res.sendFile(path.join(__dirname, '../public', 'index.html'));

})
