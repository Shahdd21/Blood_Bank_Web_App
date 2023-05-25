const mysql = require("mysql2");
const express = require("express");
const path = require("path") ;
const Ajv = require("ajv") ;
const { urlencoded } = require("express");
const CookieParser = require("cookie-parser") ;
const helmet = require("helmet");
const session = require("express-session");
const flash = require("connect-flash");

const ajv = new Ajv() ;

const app = express() ;

const port = process.env.PORT || 7000 ;
app.use(express.static('public'));
app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;
app.use(express.static("public"));
app.use(CookieParser());
app.use(session({
    secret : 'something',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
  }));
app.use(flash());
app.use(helmet());
app.set("view engine","ejs");

app.use((req,res,nxt)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    nxt();
})

process.on("uncaughtException",(exception)=>{
    console.log(exception);
    process.exit(1);
});
process.on("unhandledRejection",(exception)=>{
    console.log("promise rejected");
    process.exit(1);
});

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:"root",
    password:"shahd123",
    database:"blood_bank",
    insecureAuth : true
});
connection.connect((err)=>{
   if(err)
      console.log(err);
    else
      console.log("Database connected");  
});


 app.get("/",(req,res)=>{
    
    res.render("home");
});

app.get("/login",(req,res)=>{
  res.render("login")
});

app.get("/about",(req,res)=>{
    res.render("about")
});

app.get("/Enterprise",(req,res)=>{
    res.render("Enterprise")
});

app.get('/request2',(req,res)=>{
    res.render("request2");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.post("/contact",(req,res)=>{
    return res.render("contact",req.session.message = {
        type:'danger',
        message:'Your concerns are delivered !'
     });
})

app.get("/home",(req,res)=>{

    res.render("home");
});

app.get("/individuals",(req,res)=>{
    res.render("individuals");
});

app.get("/registration",(req,res)=>{
    res.render("registration")
});

app.get('/donations',(req,res)=>{
    res.render("donations");
 });

app.use('/auth',require('./routes/auth'));

app.listen(port,(req,res)=>{
    console.log(`Server is listening on port ${port}`) ;
});

let sql1 = `SELECT blood_bags.blood_bagsID, blood_bags.Apquantity, blood_bags.Amquantity,
blood_bags.Bpquantity,blood_bags.Bmquantity,blood_bags.ABpquantity,blood_bags.ABmquantity,blood_bags.Opquantity,blood_bags.Omquantity,hospital.Hospital_Name,hospital.Hospital_Phone,hospital.Hospital_Email,hospital.Hospital_address
FROM blood_bags
INNER JOIN hospital ON blood_bags.blood_bagsID=hospital.blood_bagsID;`;

let sql2 = `SELECT blood_bags.blood_bagsID, blood_bags.Apquantity, blood_bags.Amquantity,
blood_bags.Bpquantity,blood_bags.Bmquantity,blood_bags.ABpquantity,blood_bags.ABmquantity,blood_bags.Opquantity,blood_bags.Omquantity,donor.first_name,donor.age,donor.phone,donor.donor_email,gender.type
FROM donor
INNER JOIN gender ON donor.GenderID=gender.GenderID
INNER JOIN blood_bags ON donor.blood_bagsID=blood_bags.blood_bagsID;`

app.get('/card',(req,res)=>{
    connection.query(sql1,(err,data)=>{
        if(err) throw err;
        res.render("card",{data:data});
    })
});

app.get('/donations2',(req,res)=>{
    connection.query(sql2,(err,row)=>{
        if(err) throw err;
         res.render("donations2",{row:row});
    })
});

app.post('/request2',(req,res)=>
{
    var Apquantity=0,Amquantity=0,Bpquantity=0,Bmquantity=0,ABpquantity=0,ABmquantity=0,Opquantity=0,Omquantity=0;
    const blood_group=req.body.blood_group
    if(blood_group ==="one") 
    {
        bloodgroupID=111;
        Apquantity= Apquantity+req.body.quantity;
    }
    else if (blood_group =="two")
    {
        bloodgroupID=112;
        Amquantity=Amquantity+req.body.quantity;
    }
    else if (blood_group=="three")
    {
        bloodgroupID=113;
        Bpquantity=Bpquantity+req.body.quantity; 
    }
    else if (blood_group=="four")
    {
        bloodgroupID=114;
        Bmquantity=Bmquantity+req.body.quantity;
    }
    else if (blood_group=="five")
    {
        bloodgroupID=115;
        ABpquantity=ABpquantity+req.body.quantity;
    }
    else if(blood_group=="six")
    {
        bloodgroupID=116;
        ABmquantity=ABmquantity+req.body.quantity;
    }
    else if (blood_group=="seven")
    {
        bloodgroupID=117;
        Opquantity=Opquantity+req.body.quantity;
    }
    else
    {
        bloodgroupID=118;
        Omquantity=Omquantity+req.body.quantity;
    }

    let sql3=`INSERT INTO blood_bags (bloodgroupID, Apquantity,Amquantity,Bpquantity,Bmquantity,ABpquantity,ABmquantity,Opquantity,Omquantity) VALUES (?,?,?,?,?,?,?,?,?);`
    connection.query(sql3,[bloodgroupID, Apquantity,Amquantity,Bpquantity,Bmquantity,ABpquantity,ABmquantity,Opquantity,Omquantity],(err,row)=>{ 
        if(err) throw err;
        console.log(req.body);
    })
    res.redirect("/card");

    app.post("/donations",(req,res)=>{
        var Apquantity=0,Amquantity=0,Bpquantity=0,Bmquantity=0,ABpquantity=0,ABmquantity=0,Opquantity=0,Omquantity=0;
         var blood_group=req.body.blood_group;
         var gender = req.body.gender;
         var first_name=req.body.first_name;
         var phone=req.body.phone;
         var donor_email=req.body.donor_email;
         var age=req.body.age;
         blood_bagsID=0;
         // var GenderID=req.body.GenderID;
         // var blood_bagsID=0;
         var ssn = "";
         var password="";
         var second_name="";
     
         if(blood_group =="one") 
         {
             bloodgroupID=111;
             Apquantity= Apquantity++;
         }
         else if (blood_group =="two")
         {
             bloodgroupID=112;
             Amquantity= Amquantity++;
         }
         else if (blood_group=="three")
         {
             bloodgroupID=113;
             Bpquantity= Bpquantity++; 
         }
         else if (blood_group=="four")
         {
             bloodgroupID=114;
             Bmquantity=Bmquantity++;
         }
         else if (blood_group=="five")
         {
             bloodgroupID=115;
             ABpquantity=ABpquantity++;
         }
         else if(blood_group=="six")
         {
             bloodgroupID=116;
             ABmquantity=ABmquantity++;
         }
         else if (blood_group=="seven")
         {
             bloodgroupID=117;
             Opquantity=Opquantity++;
         }
         else
         {
             bloodgroupID=118;
             Omquantity=Omquantity++;
         }
         if(gender=="female")
         GenderID=2;
         else if(gender=="male")
         GenderID=1;
         let sql4='INSERT INTO donor (bloodgroupID ,blood_bagsID, first_name ,second_name,phone,password,donor_email,ssn,age,GenderID, Apquantity, Amquantity, Bpquantity, Bmquantity, ABpquantity, ABmquantity, Opquantity, Omquantity) VALUES (?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);'
     
     con.query(sql4,[bloodgroupID,first_name,second_name,phone,password,donor_email,ssn,age,GenderID,Apquantity, Amquantity, Bpquantity, Bmquantity, ABpquantity, ABmquantity, Opquantity, Omquantity],(err,row)=>{ 
         if(err) throw err;
         console.log(req.body);
     })
     res.redirect("/donations2");
     })
});