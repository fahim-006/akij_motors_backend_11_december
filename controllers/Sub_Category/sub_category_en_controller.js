//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: sub category en controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const  Sub_Category_en = models.Sub_Category_en;

//create create_Category_en
exports.create_Sub_Category_en = async function (req, res) {
  let body = req.body;
  try {
      await Sub_Category_en.create({
        sub_category_en: body.sub_category_en,
      })      
      .then((sub_category_en) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(sub_category_en)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};