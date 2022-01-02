//  Author: Mashrur Hossain Khan
//  Create Date: 11 December, 2021
//  Modify Date: 11 December, 2021
//  Description: Condition Warantee file for rest api project
//const jwt=require('jsonwebtoken');
/*Sequelize is a promise-based Node.js 
ORM or Object Relation Mapping  for Postgres, MySQL, MariaDB, SQLite 
and Microsoft SQL Server. It features solid transaction support, 
relations, eager and lazy loading, read replication and more.*/

/*A promise in Nodejs is an event which will produce a result in the future. 
This result can either be a success(fulfilled) or failure(rejected). 
Sequelize being a promise-based ORM means that it supports NodeJS promises using the bluebirdJS
library internally(which is a NodeJS promise library).*/

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(//To define mappings between
                            // a model and a table, use the define method. 
                            //Sequelize will then automatically add the attributes createdAt and updatedAt to it
      'Product_meta_main',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
     

        product_name_en_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            required: true,
            field: 'product_name_en_id',
          },

        
        product_name_bn_id: {
            type: DataTypes.BIGINT,
          
            field: 'product_name_bn_id',
          },

          product_name_cn_id: {
            type: DataTypes.BIGINT,
            field: 'product_name_cn_id',
          },

          category_id: {
            type: DataTypes.BIGINT,
            field: 'category_id',
          },

          sub_category_id: {
            type: DataTypes.BIGINT,
            field: 'sub_category_id',
          },

          pillar_id: {
            type: DataTypes.BIGINT,
            field: 'pillar_id',
          },
      },
      {
        tableName: 'product_meta_main',
      }
    )
  }
  