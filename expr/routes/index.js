
/*
 * GET home page.
 */
exports.index = function(req, res){
    res.render('index', { 
        title: 'Meatcar\'s Home', 
        log: 'log' 
    })
};

/*
 * GET logs 
 */
exports.log = function(req, res){
    if (req.params.id)
    {
        // display a specific log page
        res.render('log', { title: req.params.id })
    }
    else    
    {
        // display a list of previous logs
        res.render('log', { title: 'no id'})
    }
};
