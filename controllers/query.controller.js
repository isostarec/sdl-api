const collections = require('../conf/collections')

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