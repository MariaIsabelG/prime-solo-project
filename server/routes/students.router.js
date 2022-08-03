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
router.post('/', (req, res) => {
  // POST route code here
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

module.exports = router;
