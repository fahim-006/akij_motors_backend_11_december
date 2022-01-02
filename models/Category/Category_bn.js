//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: Category_bn model file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Category_bn',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        category_bn: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'category_bn',
        },
    
      },
      {
        tableName: 'Category_bn',
      }
    )
  }
  