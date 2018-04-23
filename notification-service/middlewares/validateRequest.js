var jwt = require('jwt-simple');
var auth = require('../routes/auth');
 
module.exports = function(req, res, next) {
    var apiKey = req.headers['x-api-key'] || req.headers['X-API-KEY'];
 
    if (apiKey) {
        try {
            if (!auth.validateApiKey) {
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid Api Key"
                });
                return;
            }
        }
        catch (err) {
            res.status(500);
            res.json({
                "status": 500,
                "message": "Oops something went wrong",
                "error": err
            });
        }
    }
    else {
        res.status(401);
        res.json({
            "status": 401,
            "message": "No Api Key Found"
        });
        return;
    }
};