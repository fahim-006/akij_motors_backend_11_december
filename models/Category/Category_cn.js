//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: User Category_cn file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Category_en',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        category_cn: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'category_cn',
        },
    
      },
      {
        tableName: 'Category_cn',
      }
    )
  }
  