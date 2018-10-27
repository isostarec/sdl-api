const express = require('express');
const router = express.Router();

const queryController = require('../controllers/query.controller');

/*  "/api/queryes"
 *    GET: finds all queryes
 *    POST: creates a new query
 */

router.get("/", queryController.getQueryes);

router.post("/", queryController.createQuery);

/*  "/api/queryes/:id"
 *    GET: find query by id
 *    PUT: update query by id
 *    DELETE: deletes query by id
 */

// router.get("/api/queryes/:id", function(req, res) {
// });

// router.put("/api/queryes/:id", function(req, res) {
// });

router.get("/delete/:_id", queryController.removeQuery);

module.exports = router;