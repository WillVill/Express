module.exports = function(app){
    
    app.get('/api',function(req, res){
        res.render('index')
    });

    app.set('/api/person/:id', function(req,res){
        //get data
    });

    app.get('/api/person/:id', function(req,res){
        //get data
    });

    app.delete('/api/person/:id', function(req,res){
        //delete data
    });
}