
const express = require('express');
const { home, addUser, deleteUser, AdminLogin } = require('../Controllers/AdminControllers');
const router = express.Router();



router.get("/",home)
router.post("/adduser",addUser)
router.post("/deleteuser/:id",deleteUser)
router.post("/adminlogin",AdminLogin)

module.exports = router;