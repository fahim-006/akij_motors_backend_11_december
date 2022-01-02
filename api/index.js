//  Author: Mashrur Hossain Kham
//  Create Date: 27/12/2021
//  Modify Date: 27/12/2021
//  Description: Main API file for rest api project for Akij Motors backend

// Library imports
var express = require("express");
var router = express.Router();
const passport = require("passport");
const jwtStrategry = require("../strategies/jwt");
passport.use(jwtStrategry);
const path = require('path')

//import Controllers starts
const userController = require('../controllers/userController')
const category_en_controller = require('../controllers/Category/category_en_Controller')
const category_bn_controller = require('../controllers/Category/category_bn_controller')
const category_cn_controller = require('../controllers/Category/category_cn_controller')
//const category_main_controller = require('../controllers/Category/MainCategory');
const sub_category_en_controller = require('../controllers/Sub_Category/sub_category_en_controller');
const Specification_name_en = require("../controllers/Specifications/Specifications_name_en");
const Specification_details_en = require("../controllers/Specifications/Specifications_details_en");
const product_image = require("../controllers/ProductControllers/Product_image_controller")
const conversion_name_en = require("../controllers/Conversion/Conversion_name_controller_en")
const conversion_details_en = require("../controllers/Conversion/Conversion_details_Controller_en")
const Warentee_controller_en = require("../controllers/warenteeController/WarenteeController")
const Pilar_controller_en = require("../controllers/Pillar_Controllers/Pillar_controller_en")
const Product_name_controller_en = require("../controllers/ProductControllers/Product_name_en_controller")
const Product_main_controller = require("../controllers/ProductControllers")
//import Controllers ends
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

// Entery point of the Application
router.get("/", (req, res) => res.send("Hello World"));
// =======================================
// ALL the role API

// @route   POST /api/permission/add
// @desc    Create permission
// @access  Private


// @route   GET /api/permission/all
// @desc    Create permission
// @access  Public

// =======================================

// =======================================
// ALL the Auth API


//USER APIs
router.post(
  "/api/create/users",
  userController.createUser
)

//Category EN controller
router.post(
  "/api/create/create_category_en",
  category_en_controller.create_Category_en
)

//Category BN controller
router.post(
  "/api/create/create_category_bn",
  category_bn_controller.create_Category_bn
)

//sub Category EN controller
router.post(
  "/api/create/create_category_cn",
  category_cn_controller.create_Category_cn
)

//Sub Category EN controller
router.post(
  "/api/create/create_sub_category_en",
  sub_category_en_controller.create_Sub_Category_en
)

//Specifications name controller
router.post(
  "/api/create/create_specifications_name",
  Specification_name_en.create_Specification_names_en
)

//Specifications detaiuls controller
router.post(
  "/api/create/create_specifications_details",
  Specification_details_en.create_Specification_details_en
)

//create product image
router.post(
  "/api/create/product_image_upload",
  product_image.Create_Product_images
)

//create conversion name controller
router.post(
  "/api/create/conversion_name_controller",
  conversion_name_en.create_Conversion_names_en
)

//create conversion details controller
router.post(
  "/api/create/conversion_details_controller",
  conversion_details_en.create_Conversion_details_en
)

//create warentee controller
router.post(
  "/api/create/warentee",
  Warentee_controller_en.Create_warentee_en
)

//create pillar controller
router.post(
  "/api/create/create_pilar_name_en",
  Pilar_controller_en.create_pilar_name_en
)

//create product name controller
router.post(
  "/api/create/product_name_controller_en",
  Product_name_controller_en.Create_product_name_en
)


//create Product_main_controller
router.post(
  "/api/create/product_main_controller",
  Product_main_controller.Create_product_main
)
/*
//buy APIS
router.post(
  "/api/create/buy",
  buyController.createBuy
)

router.get(
  "/api/getall/buy",
  buyController.getAllBuy
)
  router.put(
    "/api/update/buy/:id",
    buyController.updateBuyById
  )

  router.get(
    "/api/buy/:id",
    buyController.getBuyById
  )

  router.delete(
    "/api/buy/:id",
    buyController.deleteBuyById
  )
  */
module.exports = router;
