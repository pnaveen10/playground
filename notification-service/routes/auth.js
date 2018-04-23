var auth = {
    validateApiKey: function(product, apiKey) {
        return true;
        //TODO: Add api key validation with DB
    }
}
 
module.exports = auth;