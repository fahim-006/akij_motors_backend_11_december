//  Author: Mohammad Jihad Hossain
//  Create Date: 24/03/2021
//  Modify Date: 31/03/2021
//  Description: All the relation, data, database sync for rest api project for FamousAuto


"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;

// Get all database config keys
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


// Check connection with DB
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// All association sync
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Initialize DB with ORM
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import models for categories
db.userRegistration = require("./UserModel")(sequelize, Sequelize);
db.Category_bn = require("./Category/Category_bn")(sequelize, Sequelize);
db.Category_en = require("./Category/Category_en")(sequelize, Sequelize);
db.Category_cn = require("./Category/Category_cn")(sequelize, Sequelize);
//db.Category_Main = require("./Category/MainCategory")(sequelize, Sequelize);

// Import models for sub categories
db.Sub_Category_bn = require("./Sub_Category/Sub_category_bn")(sequelize, Sequelize);
db.Sub_Category_en = require("./Sub_Category/Sub_category_en")(sequelize, Sequelize);
//db.Sub_Category_Main = require("./Sub_Category/Main_Sub_Category")(sequelize, Sequelize);
db.Specification_names_en = require("./Specifications/Specification_name_en")(sequelize, Sequelize);
db.Specification_details_en = require("./Specifications/Specification_details_en")(sequelize, Sequelize);
db.product_images = require("./Products/Product_images")(sequelize, Sequelize);
db.conversion_name_en = require("./Conversion_model/Conversion_name_en")(sequelize, Sequelize);
db.conversion_details_en = require("./Conversion_model/Conversion_details_en")(sequelize, Sequelize);
db.warentee_en = require("./Warranty/waranty_en")(sequelize, Sequelize);
db.pilar_name_en = require("./Pillar_models/pillar_name")(sequelize, Sequelize);
db.product_name_en = require("./Product_models/Product_name_model")(sequelize, Sequelize);
db.product_main = require("./Product_models")(sequelize, Sequelize);
//Drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Datasource syc
db.sequelize.sync();

module.exports = db;
