//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: sub Category english model file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Sub_Category_en',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        sub_category_en: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'sub_category_en',
        },
    
      },
      {
        tableName: 'Sub_Category_en',
      }
    )
  }
  