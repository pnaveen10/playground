var sql = require('../sql');
var query = require('../lib/query');
var router = new require('express').Router();

module.exports = router;

router.get('/user/:email', function (req, res, next) {
    var email = req.params.email;
    sql.run('get-user-by-email', [email], function (err, rows) {
        if (err) return next(err);
        if (!rows.length) return next(404);

        return res.json(rows[0]);
    });
});

router.post('/user', function (req, res, next) {
    var queryText = 'INSERT INTO "user"(email) VALUES ($1)';
    var queryValues = [req.body.email]
    query(queryText, queryValues, function (err, rows, res) {
        if (err) return next(err);

        res.status(204).end();
    });
});