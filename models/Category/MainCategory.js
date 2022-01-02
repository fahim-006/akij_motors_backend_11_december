//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: User model file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Category_Main',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        id_en: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'id_en',
        },
    
        id_bn: {
            type: DataTypes.STRING,
            
            field: 'id_bn',
          },

          id_cn: {
            type: DataTypes.STRING,
            
            field: 'id_cn',
          },
      },
      {
        tableName: 'Category_Main',
      }
    )
  }
  