
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Meatcar\'s Home', log: 'log' })
};

/*
 * GET log page. Display a list of logs
 */

exports.log = function(req, res){
    if (req.params.id)
      res.render('log', { title: req.params.id })
    else    
      res.render('log', { title: 'no id'})
};
