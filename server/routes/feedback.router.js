const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    const feedback = (req.body);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((results) => {
        console.log('Feedback', feedback);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error with post', error);
        res.sendStatus(500);
    })
});

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "feedback"
    ORDER BY "id" DESC;`;
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows);
        console.log('getting feedback', results.rows);
    })
    .catch((error) => {
        console.log('error with get', error);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req,res) => {
    const feedbackId = req.params.id;
    pool.query('DELETE FROM "feedback" where "id"=$1;', [feedbackId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error with delete', error);
        res.sendStatus(500);
    })
});




module.exports = router;