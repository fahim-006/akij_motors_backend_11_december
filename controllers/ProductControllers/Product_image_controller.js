//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: product image controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const  Product_images = models.product_images;

//create create_Category_en
exports.Create_Product_images = async function (req, res) {
  let body = req.body;
  try {
      await Product_images.create({
        product_id: body.product_id,
        product_image:body.product_image
      })      
      .then((Product_images) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(category_en)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};
