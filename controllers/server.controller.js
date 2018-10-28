const mongoose = require('mongoose');
const collections = require('../conf/collections');
const serverSchema = require('../schemas/serverSchema');

const ObjectId = mongoose.Types.ObjectId;
const server = mongoose.model('servers', serverSchema);


exports.getServers = async function (req, res, next){
    try
    {
      db.collection(collections.SERVERS_COLLECTION).find({}).toArray( (err, docs) => {
          return res.status(200).json({status: 200, data: docs, message: "Servers received successfully"})
      })
    }
    catch(e)
    {
      return res.status(400).json({status: 400, message: e.message})
    }
  }

  exports.createServer =  async function (req, res, next){
    try
    {
      let newserver = req.body
      newserver.createDate = new Date()

      if(!req.body.name){
        return res.status(400).json({status: 400, message: "Invalid user input! No name supplied!"}) 
      }
        db.collection(collections.SERVERS_COLLECTION).insertOne(newserver, (err, doc) => {
          return res.status(201).json(doc.ops[0])
        })
    }
    catch(e)
    {
      return res.status(400).json({status: 400, message: e.message})
    }
  }

  exports.removeServer = async function (req, res, next){
    try
    {
      let serverId = ObjectId(String(req.params._id));
        server.findByIdAndRemove(serverId, (doc) => {
        return res.status(200).json({status: 200, message: doc + "Removed server!"}) 
      })
      //db.collection(collections.SERVERS_COLLECTION).remove({ _id: "ObjectID("+"5bc5da9418c4af36c85af94e"+")"})
    }
    catch(e)
    {
      return res.status(400).json({status: 400, message: e.message});
    }
  }