//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: pilar_name_en controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const  pillar_name_en = models.pilar_name_en;

//create pilar_name_en
exports.create_pilar_name_en = async function (req, res) {
  let body = req.body;
  try {
      await pillar_name_en.create({
        pillar_name:body.pillar_name,
      })      
      .then((pillar_name_en) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(pillar_name_en)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};
