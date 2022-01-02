//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: Conversion_name_en model english file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Conversion_name_en',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },

        product_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          field: 'product_id',
        },
       
        conversion_Name: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'conversion_Name',
        },
      },
      {
        tableName: 'conversion_names_en',
      }
    )
  }
  