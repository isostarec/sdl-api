const mongoose = require('mongoose');
const collections = require('../conf/collections');
const querySchema = require('../schemas/querySchema');

const ObjectId = mongoose.Types.ObjectId;
const query = mongoose.model('queryes', querySchema);

/*  "/api/queryes"
 *    GET: finds all queryes
 *    POST: creates a new query
 */

  exports.getQueryes = async function (req, res, next){
    try
    {
      db.collection(collections.QUERYES_COLLECTION).find({}).toArray( (err, docs) => {

          return res.status(200).json({status: 200, data: docs, message: "Queryes received successfully"})
      })
    }
    catch(e)
    {
      return res.status(400).json({status: 400, message: e.message})
    }
  }

  exports.createQuery =  async function (req, res, next){
    try
    {
      let newQuery = req.body
      newQuery.createDate = new Date()

      if(!req.body.name){
        return res.status(400).json({status: 400, message: "Invalid user input! No name supplied!"}) 
      }
        db.collection(collections.QUERYES_COLLECTION).insertOne(newQuery, (err, doc) => {
          return res.status(201).json(doc.ops[0])
        })
    }
    catch(e)
    {
      return res.status(400).json({status: 400, message: e.message})
    }
  }

  exports.removeQuery = async function (req, res, next){
    try
    {
      let queryId = ObjectId(String(req.params._id));
        query.findByIdAndRemove(queryId, (doc) => {
        return res.status(200).json({status: 200, message: doc + "Removed query!"}) 
      })
      //db.collection(collections.QUERYES_COLLECTION).remove({ _id: "ObjectID("+"5bc5da9418c4af36c85af94e"+")"})
    }
    catch(e)
    {
      return res.status(400).json({status: 400, message: e.message});
    }
  }