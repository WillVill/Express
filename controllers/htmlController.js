var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: 
false});

module.exports = function(app){
    
    app.post('/person/:id', urlencodedParser, function(req,res){
        //get data
    });

    app.get('/person/:id', function(req,res){
        //get data
    });

    app.delete('/person/:id', function(req,res){
        //delete data
    });
    
}