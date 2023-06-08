const { getQA, getNotifications } = require("./controller/admin.controller");
const {auth} = require("../../middleware/auth");
// const userAPI = require("./userRoles");
// const {uploadData, handleMulterErr} = require("../../service/uploadFile");
const validationFun = require("../../middleware/validation");
const userVal = require("./admin.validator");
const router = require("express").Router();


router.get("/getFAQ", getQA );
router.get("/getNewNotifications", getNotifications );


module.exports = router;  