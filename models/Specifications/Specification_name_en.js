//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: Specification model english file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Specification_names_en',
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
       
        specification_Name: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'specification_Name',
        },
      },
      {
        tableName: 'specification_names_en',
      }
    )
  }
  