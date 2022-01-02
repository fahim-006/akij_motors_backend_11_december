 //  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: sub Category Sub_Category_Main model file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Sub_Category_Main',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        main_sub_category: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'main_sub_category',
        },
    
      },
      {
        tableName: 'Sub_Category_Main',
      }
    )
  }
  