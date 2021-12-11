//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: User model file for rest api project
//const jwt=require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'User',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        Name: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'Name',
        },
        
        Pillar_id: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'Pillar_id',
        }, 

          Designation: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'Designation',
        }, 

          Phone_no: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'Phone_no',
        }, 

          Email: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'Email',
        }, 

          Password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'Password',
        }, 
      },
      {
        tableName: 'user',
      }
    )
  }
  