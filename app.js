//require important libraries and Schema files
const express= require("express");
const morgan=require("morgan");
const Item=require("./models/items.js");
const mongoose=require("mongoose");
const bodyParser = require('body-parser');

//create an express and sever
const app = express();
app.listen(3000,()=> console.log("listening"));

//Views ejs files
app.set("View engine", "ejs");

//define folder that have static file
app.use(express.static('public'));

//connect to mongodb database
const dbURI="mongodb+srv://bao:123@todolistcluster.hay4q.mongodb.net/To-do-list-database?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>console.log("connected to db"))
    .catch((err)=> console.log(err));


//middleware
app.use(morgan('dev'));

//enconde what api send to sever
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));


//ROUTES
app.post("/createtodo",(req,res)=>{
    
    console.log(req.body);
    const item=new Item(req.body);
    item.save()
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        });
    res.redirect("/");
});
app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    Item.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:"/"})

        })
        .catch((err)=>{
            console.log(err)
        });

});
app.put("/edit/:id",(req,res)=>{
    Item.findByIdAndUpdate(req.params.id,req.body)
        .then((result)=>{
            res.json({redirect:"/"})
        })
        .catch((err)=>{
            console.log(err)
        });
});
app.get("/getdata",(req,res)=>{
    Item.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
});
app.get("/",(req,res)=>{
    Item.find()
        .then((result)=>{
            res.render("index.ejs",{todoList:result})
        })
        .catch((err)=>{
            console.log(err);
        });
});

//404 page
app.use((req,res)=>{
    res.status(404).send('Not found')
});

