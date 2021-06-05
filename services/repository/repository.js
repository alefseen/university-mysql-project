
async function getById(req, modelName, id) {
    let result;
    try {
      result = await req.app.get("db")[modelName].findByPk(id).then();
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  
  async function getItemByOptions(req, modelName, options) {
    let result;
    try {
      result = await req.app.get("db")[modelName].findOne(options);
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  
  async function getItemsByOptions(req, modelName, options) {
    let result;
    try {
      result = await req.app.get("db")[modelName].findAll(options);
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  async function bulkUpdateItems(req, modelName, data, updateFields) {
    let result;
    try {
      result = await req.app
        .get("db")
        [modelName].bulkCreate(data, { updateOnDuplicate: updateFields });
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  async function createItem(req, modelName, data,options) {
    let result;
    try {
      result = await req.app.get("db")[modelName].create(data,options);
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  async function updateItem(req, modelName, data , updateFields) {
    let result;
    try {
      result = await req.app.get("db")[modelName].create(data , { updateOnDuplicate: updateFields });
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  async function count(req, modelName, data) {
    let result;
    try {
      result = await req.app.get("db")[modelName].count(data);
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  async function createBulkItem(req, modelName, data) {
    let result;
    try {
      result = await req.app.get("db")[modelName].bulkCreate(data);
    } catch (err) {
      return Promise.reject(err);
    }
    return result;
  }
  module.exports={
    createBulkItem,createItem,bulkUpdateItems,getItemsByOptions,getItemByOptions,getById,updateItem,count
  };