var sys = require("util"),
my_http = require("http"),
path = require("path"),
url = require("url"),
fs = require("fs");
my_http.createServer(function(request,response){
    var my_url = url.parse(request.url);
	var my_path = my_url.pathname;
	path.exists(my_path,function(exists){
		if(!exists){
			response.writeHeader(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
			response.end();
		}
		else{
            fs.stat(my_path, function(err, stats) {
                if (err) throw err;
                else if(stats.isDirectory()) {
                    fs.readdir(my_path, function(err, files) {
                        response.writeHeader(500, {"Content-Type": "text/html"});
                        response.write("<ul>\n");
                        for (i in files) {
                            var new_path = path.join(my_path, {}, files[i]);
                            my_url["pathname"] = new_path;
                            var text = url.format(my_url);
                            response.write("<li><a href=\"" + text + "\">" + files[i] + "</a>\n");
                        }
                        response.write("</ul>\n");
                        response.end();  
                    });
                }
                else {
                    fs.readFile(my_path, "binary", function(err, file) {
                         if(err) {
                             response.writeHeader(500, {"Content-Type": "text/plain"});
                             response.write(err + "\n");
                             response.end();  

                         }
                         else{
                            response.writeHeader(200);
                            response.write(file, "binary");
                            response.end();
                        }

                    });
                }
            });
		}
	});
}).listen(8080);
sys.puts("Server Running on 8080");

