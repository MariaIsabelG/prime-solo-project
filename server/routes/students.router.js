const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const access = 2;  
  const queryText = `SELECT id, full_name, username, considerations FROM "user" WHERE "access_level" = $1`;
  pool.query( queryText, [access] )
  .then ( response =>{
    res.send( response.rows );
    console.log( response.rows ); 
    }).catch((error) => {
      console.log('Error getting students:', error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
