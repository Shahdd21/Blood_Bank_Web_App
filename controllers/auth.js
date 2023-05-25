const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

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

exports.register = (req,res) => {
  //  console.log(req.body);

  const phone = req.body.phone;
  const fname = req.body.fname;
  const  lname = req.body.lname;
  const  email = req.body.email;
  const  ssn = req.body.ssn;
  let  gender = req.body.gender;
  const  bdate = req.body.bdate;
  let  bloodgroup = req.body.bloodgroup;
  const  password = req.body.password;
  const  confirm_password = req.body.confirm_password;
  const bloodbags = 1;
 
  if(gender.value == "male")
     gender = 1 ;
  else
    gender = 2;
    
  if(bloodgroup.value == "one")
     bloodgroup = 111;
  
  else if(bloodgroup.value =="two")
     bloodgroup = 112 ;

     else if(bloodgroup.value =="three")
     bloodgroup = 113 ;

     else if(bloodgroup.value =="four")
     bloodgroup = 114 ;

     else if(bloodgroup.value =="five")
     bloodgroup = 115 ;

     else if(bloodgroup.value =="six")
     bloodgroup = 116 ;

     else if(bloodgroup.value =="seven")
     bloodgroup = 117 ;

     else
     bloodgroup = 118 ;


  connection.query('SELECT donor_email FROM donor WHERE donor_email = ?',[email],async(err,results)=>{
  
    try {
 
     if (results.length > 0){
      return res.render("individuals",req.session.message = {
         type:'danger',
         message:'Email already Exists'
      });
    }  

    else if (password !== confirm_password){
        return res.render("individuals",req.session.message = {
         type:'danger',
         message:'Passwords do not match'
      });
    }
    
    else{   
    let hashedPassword = await bcrypt.hash(password,0);

    console.log(hashedPassword);

    connection.query('INSERT INTO donor SET ?', {first_name:fname,second_name:lname,birth_date:bdate,

      donor_email:email,ssn:ssn,phone:phone,password:hashedPassword,
      GenderID:gender,bloodgroupID:bloodgroup},(err,results)=>{

         if(err)
           console.log(err);

         else{
            console.log(results);
            res.render("individuals",req.session.message = {
               type:'success',
               message:'You are now registered !'
            });
         } 
      })

      const transporter = nodemailer.createTransport({
         service: 'gmail',
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth: {
          user: 'bloodbank865@gmail.com',
          pass: 'wwgmukftvvyrosac',
         },
        });

        const msg = {
         from: '"The BloodBank PR" <bloodbank865@gmail.com>',
         to: `${email}`,
         subject: "Welcome to our Family !",
         text: "Thanks for joining us !\nWe will keep you updated about your latest donation date, the places of our donation booths and any donation campagin we launch!\nGod Bless You!",
       }

       const info = await transporter.sendMail(msg);
     
       console.log("Message sent: %s", info.messageId);
       // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
   }
  }

     catch(err){
       console.log(err);
     }
     
  });
}

exports.registerEn = (req,res) => {
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   const confirm_password = req.body.confirm_password
   const phone = req.body.phone;
   const mobilePhone = req.body.phone;
   const address = req.body.address;

   connection.query('SELECT Hospital_Email FROM hospital WHERE Hospital_Email = ?',[email], async(err,results)=>{

    try{

      if (results.length > 0){
         return res.render("Enterprise",req.session.message = {
            type:'danger',
            message:'Email already Exists'
         });
       }  

       else if (password !== confirm_password){
         return res.render("Enterprise",req.session.message = {
          type:'danger',
          message:'Passwords do not match'
       });
     }

     else{    
      let hashedPassword = await bcrypt.hash(password,0);
  
      console.log(hashedPassword);
  
      connection.query('INSERT INTO hospital SET ?',{Hospital_name:name,Hospital_email:email,Hospital_Phone:phone,
  
        mobile_phone:mobilePhone,Hospital_address:address,password:hashedPassword},(err,results)=>{
  
           if(err)
             console.log(err);
  
           else{
              console.log(results);
              res.render("Enterprise",req.session.message = {
                 type:'success',
                 message:'You are now registered !'
              });
           } 
        })
     }

    }

      catch(err){
         console.log(err);
       }
   });

}

exports.login = (req,res) => {
   const email = req.body.email;
   const Loginpassword = req.body.password;

   if (email && Loginpassword){

   connection.query('SELECT * FROM donor WHERE donor_email = ?',[email],async(err,results)=>{

      try{
          
         if(results.length > 0){

            const Match = await bcrypt.compare(Loginpassword,results[0].password);

            if(Match){
               const token = jwt.sign({email:email},"secretkeyfortoken");
               res.header("x-auth-token",token);
               
               res.render("home",req.session.message = {
                  type:'success',
                  message:'Successfully Logged in !'
               });
               console.log("logged in");
               console.log(token);
            }

            else{
               res.render("login",req.session.message = {
                  type:'danger',
                  message:'Incorrect Email or Password'
               });
            }
         }

         else{
            res.render("login",req.session.message = {
               type:'danger',
               message:'Incorrect Password or Email'
            });
         }

      }

      catch(err){
         console.log(err);
      }
   })

}

   else{
      res.render("login",req.session.message = {
         type:'danger',
         message:'Please Enter Your Data'
      });
   }
}