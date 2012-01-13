
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

/*
 * GET home page.
 */

exports.blog = function(req, res){
  res.render('index', { title: req.params.id })
};
