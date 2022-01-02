//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: User controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const Category_Main = models.Category_Main;

//create create_Category_Main
exports.Create_Category_Main = async function (req, res) {
  let body = req.body;
  try {
      await Category_Main.create({
        id_en: body.id_en,
        id_bn: body.id_bn,
        id_cn: body.id_cn,
      })      
      .then((category_main) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(category_main)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};