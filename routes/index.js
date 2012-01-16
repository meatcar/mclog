var fs = require("fs");
var path = require("path");
var md = require("node-markdown").Markdown;

/*
 * GET home page.
 */
exports.index = function(req, res){
    res.render('index', { 
        title: 'this page', 
        log: 'log' 
    })
};

/*
 * GET logs 
 */
exports.log = function(req, res){
    var logsdir = path.join(process.cwd(), '/public/log/');
    // display a specific log page
    if (req.params.logname)
    {
        var log_path = logsdir + req.params.logname + '.markdown'; 

        fs.readFile( log_path, 'utf8', function(err, data) {
            if (err) {
                console.log(err);
                return;
            }
            res.render('log', { 
                title: req.params.logname,
                log: md(data)
            });
        });
    }
    // display a list of previous logs
    else    
    {
        fs.readdir(logsdir, function(err, files) {
            if (err) {
                console.log(err);
                return;
            }
            for (var file in files) {
                files[file] = files[file].slice(0, 0 - '.markdown'.length);
            }
            files.sort();
            res.render('logs', { 
                title: 'logs', 
                logs: files
            });
        });
    }
};
