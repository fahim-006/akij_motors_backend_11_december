//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: User controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const  Conversion_names_en = models.conversion_name_en;

//create Conversion_names_en
exports.create_Conversion_names_en = async function (req, res) {
  let body = req.body;
  try {
      await Conversion_names_en.create({
        product_id:body.product_id,
        conversion_Name: body.conversion_Name,
      })      
      .then((Conversion_names_en) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(Conversion_names_en)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};
