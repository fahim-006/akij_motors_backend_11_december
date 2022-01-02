//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: User controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const  Conversion_details_en = models.conversion_details_en;

//create Conversion_names_en
exports.create_Conversion_details_en = async function (req, res) {
  let body = req.body;
  try {
      await Conversion_details_en.create({
        conversion_Name_id:body.conversion_Name_id,
        conversion_name_details: body.conversion_name_details,
      })      
      .then((conversion_name_details) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(conversion_name_details)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};
