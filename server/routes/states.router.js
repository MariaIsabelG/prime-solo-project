const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
 router.get('/emotions', (req, res) => {
    // GET route code here  
    const queryText = `SELECT * FROM "emotion";`;
    pool.query( queryText )
    .then ( response =>{
      res.send( response.rows );
      console.log( response.rows ); 
      }).catch((error) => {
        console.log('Error getting emotions:', error);
        res.sendStatus(500);
      });
  });

  router.get('/sensations', (req, res) => {
    // GET route code here  
    const queryText = `SELECT * FROM "sensation";`;
    pool.query( queryText )
    .then ( response =>{
      res.send( response.rows );
      console.log( response.rows ); 
      }).catch((error) => {
        console.log('Error getting sensations:', error);
        res.sendStatus(500);
      });
  });

  router.get('/overview', (req, res) => {
    // GET route code here  
    const queryText = `SELECT full_name FROM "user" WHERE access_level = 2;`;
    pool.query( queryText )
    .then ( response =>{
      res.send( response.rows );
      console.log( response.rows ); 
      }).catch((error) => {
        console.log('Error getting sensations:', error);
        res.sendStatus(500);
      });
  });


module.exports = router;