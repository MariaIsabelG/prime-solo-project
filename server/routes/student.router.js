const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const access = 2;  
  const queryText = `SELECT * FROM "user" WHERE "access_level" = $1`;
  pool.query( queryText, [access] )
  .then ( result =>{
    res.send( result.rows );
    console.log( result.rows ); 
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
