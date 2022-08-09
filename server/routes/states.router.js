const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
 router.get('/emotions', (req, res) => {
    // GET route code here  
    const queryText = `SELECT * FROM "emotion" ORDER BY id ASC;`;
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
    const queryText = `SELECT * FROM "sensation" ORDER BY id ASC;`;
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
    const queryText = `select "input"."created_at" AS "recent", "user"."full_name" AS "name", "emotion"."emotion_name" AS "emotion", "emotion"."emotion_value" AS "evalue", "sensation"."sensation_name" AS "sensation", "sensation"."sensation_value" AS "svalue"   
    FROM "input"
    JOIN "user" ON "user"."id" = "input"."user_id"
    JOIN "emotion" ON "emotion"."id" = "input"."emotion_id" 
    JOIN "sensation" ON "sensation"."id" = "input"."sensation_id"
    WHERE input.created_at = (SELECT max(created_at) FROM input WHERE "user".id = input.user_id);`;
    pool.query( queryText )
    .then ( response =>{
      res.send( response.rows );
      console.log( response.rows ); 
      }).catch((error) => {
        console.log('Error getting sensations:', error);
        res.sendStatus(500);
      });
  });

  router.get('/student/:id', (req, res) => { 
    const queryText = `SELECT "created_at", "user_id", "emotion_value", "sensation_value", "full_name" FROM input 
    JOIN "user" ON "user"."id" = "input"."user_id"
    JOIN "emotion" ON "emotion"."id" = "input"."emotion_id" 
    JOIN "sensation" ON "sensation"."id" = "input"."sensation_id"
    WHERE "user_id" = 34;`;
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