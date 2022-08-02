const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
 router.get('/', (req, res) => {
    // GET route code here  
    const queryText = `SELECT * FROM "emotion";`;
    pool.query( queryText )
    .then ( response =>{
      res.send( response.rows );
      console.log( response.rows ); 
      }).catch((error) => {
        console.log('Error getting students:', error);
        res.sendStatus(500);
      });
  });


module.exports = router;