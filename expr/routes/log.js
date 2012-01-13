
/*
 * GET log page. Display a list of logs
 */

exports.log = function(req, res){
    if (req.params.id)
      res.render('log', { title: req.params.id })
    else    
      res.render('log', { title: 'no id'})
};
