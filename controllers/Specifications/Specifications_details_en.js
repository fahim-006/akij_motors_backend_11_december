//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: User controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const  Specification_details_en = models.Specification_details_en;

//create create_Category_en
exports.create_Specification_details_en = async function (req, res) {
  let body = req.body;
  try {
      await Specification_details_en.create({
        specification_Name_id: body.specification_Name_id,
        specification_Name_details:body.specification_Name_details
      })      
      .then((category_en) => {
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
