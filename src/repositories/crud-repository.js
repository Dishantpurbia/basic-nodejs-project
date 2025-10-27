const { where } = require("sequelize");
const { logger } = require("../config");
const apperror = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

class crudrepository {
    constructor(model){
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
   
     }
    

    async destroy(data) {
      const response = await this.model.destroy({
         where:{
             id: data
           }
       });
       if(!response){
        throw new apperror(`not ble to find the resource`,StatusCodes.NOT_FOUND);
       }
        return response;
     }
    

    async get(data) {
        const response = await this.model.findByPk(data);
        if(!response){
            throw  new apperror(`not able to found the resource`,StatusCodes.NOT_FOUND);
        }
        return response;
     } 

    async getAll(data) {
        const response = await this.model.findAll(data);
        return response;
     }

    async update(id,data) {
        const [response] = await this.model.update(data,{
            where:{
                id:id
            }
        });
        if(!response){
            throw new apperror(`not able too find resource`,StatusCodes.NOT_FOUND);
        }
        return response;
    }
}

module.exports = crudrepository;
