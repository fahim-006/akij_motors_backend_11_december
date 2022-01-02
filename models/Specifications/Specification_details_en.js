//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: Specification details model english file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Specification_details_en',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        specification_Name_id: {
          type: DataTypes.STRING,
          field: 'specification_Name_id',
        },

        specification_Name_details: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'specification_Name_details',
          },
      },
      {
        tableName: 'specification_details_en',
      }
    )
  }
  