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
      'Pillar_name_en',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
     

        pillar_name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'pillar_name',
          },
    
      },
      {
        tableName: 'pillar_name_en',
      }
    )
  }
  