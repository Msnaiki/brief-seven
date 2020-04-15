const path = require('path');
const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const dataAccess = require('./MyModules/dataAccess');
var bodyParser = require('body-parser');

app.engine('hbs',hbs({extname:'hbs',defaultLayout:'reserve',layoutsDir:__dirname + '/views'}))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/Style",express.static("./Style"))
app.use("/Script",express.static("./Script"))
app.use("/Images",express.static("./Images"))


// accept json 
app.use(bodyParser.json());

var Producto = dataAccess.LoadJson('Data/products.json');
console.log(Producto.length)

//read
app.get("/reserve.hbs", (req, res) => {
  res.render('reserve.hbs',{Producto});
});

//write
app.post("/ADDproduct",function(req,res){
  Producto = dataAccess.LoadJson('Data/products.json');
  var new_product={id:req.body.addname, source:req.body.addsource} ;
  Producto.push(new_product);
  dataAccess.SaveJson("data/products.json",Producto);
  
  res.render('reserve.hbs',{Producto});
}); 

//update

app.post("/updateproduct",function(req,res){
  Producto = dataAccess.LoadJson('Data/products.json'); 
  var new_product={id:req.body.newname, source:req.body.newsource} ;
  Producto.forEach(function(item){
    if(item.id == req.body.nameup){
      item.id = new_product.id;
      item.source = new_product.source;
    }
  });

    dataAccess.SaveJson("data/products.json",Producto);  
 
  
  res.render('reserve.hbs',{Producto});
}); 
// delete

app.post("/delproduct",function(req,res){
  var Producto = dataAccess.LoadJson('Data/products.json'); 
 var temparrray = [];
 var j=0;
for(i=0 ; i<Producto.length ; i++){
  if(Producto[i].id != req.body.namedel ){
    temparrray.push(Producto[i]);
    j++;
  }
};
console.log(temparrray)

    dataAccess.SaveJson("data/products.json",temparrray);  
    Producto = dataAccess.LoadJson('Data/products.json');
 

  res.render('reserve.hbs',{Producto});
});



  var port = process.env.PORT || 4000;
app.listen(port,() => console.log(`Listening on port ${port}...`));


