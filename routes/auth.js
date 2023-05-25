const express = require("express") ;
const router = express.Router() ;
const authController = require("../controllers/auth");
const LoginValidator = require("../middlewares/loginMWValidator");
const RegistrationValidator = require("../middlewares/RegistrationMWValidator");
const RegistrationEnValidator = require("../middlewares/RegistrationEnMWValidator");

router.post("/individuals",RegistrationValidator, authController.register );

router.post("/Enterprise",RegistrationEnValidator, authController.registerEn );

router.post("/login",LoginValidator,authController.login);

module.exports = router ;