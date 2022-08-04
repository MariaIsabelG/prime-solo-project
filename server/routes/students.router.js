const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const access = 2;  
  const queryText = `SELECT id, full_name, username, considerations FROM "user" WHERE "access_level" = $1 ORDER BY full_name ASC`;
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
router.post('/input', (req, res) => {
  // POST route code here
  const id = req.body.user_id;
  const emotionId = req.body.emotion_id;
  const sensationId = req.body.sensation_id;

  const queryText = 'INSERT INTO "input" ("user_id", "emotion_id", "sensation_id") VALUES ($1, $2, $3)'
  pool.query( queryText, [ id, emotionId, sensationId ])
  .then((result) => {
    res.sendStatus(200);
})
.catch((error) => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500);
});
});

router.put('/edit/:id', (req, res) => {
  // Update this single student
  const id = req.params.id;
  const name = req.body.full_name;
  const username = req.body.username;
  const considerations = req.body.considerations;
  console.log( 'This is params:',req.body);
  const sqlText = `UPDATE "user" SET full_name = $1, username = $2, considerations = $3 WHERE id = $4`;
  pool.query(sqlText, [name, username, considerations, id])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  console.log ('This is the id to delete:', id);
  const queryText = `DELETE FROM "user" WHERE id = $1;`;
  pool.query( queryText, [id] )
  .then ( response =>{ 
    res.sendStatus(200);
    }).catch((error) => {
      console.log('Error getting students:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
