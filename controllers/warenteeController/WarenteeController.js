//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: User controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const Warentee_controller_en = models.warentee_en;

//create create_Category_Main
exports.Create_warentee_en= async function (req, res) {
  let body = req.body;
  try {
      await Warentee_controller_en.create({
        product_id: body.product_id,
        conditional_warantee: body.conditional_warantee,
      })      
      .then((Warentee_controller_en) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(Warentee_controller_en)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};