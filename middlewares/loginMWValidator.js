const validator = require("../util/LoginValidator");

module.exports = (req,res,nxt) => {
    let valid = validator(req.body);

    if(valid){
        console.log("valid");
        nxt();
    }
    else{
        res.send("forbidden command");
    }
}