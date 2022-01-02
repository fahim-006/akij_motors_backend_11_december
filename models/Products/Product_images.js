//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: Product Images model english file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Product_images',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        product_id: {
          type: DataTypes.STRING,
          field: 'product_id',
        },

        product_image: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'product_image',
          },
      },
      {
        tableName: 'product_images',
      }
    )
  }
  