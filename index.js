var express = require('express');
var app = express();
var request = require('request');

var path = require("path");

//var cors = require('cors');
//var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
//Set port number
app.set('port', process.env.PORT || 8080);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());
app.use(cookieParser());
app.get('/',function(req,res){
    res.send('Hello World - George');
});

app.get('/authors',function(req,res){
	var info1,info2;

	var url1 = 'https://jsonplaceholder.typicode.com/users';
	var url2 = 'https://jsonplaceholder.typicode.com/posts';
	request(url1, function(error, response, html){
		if(!error && response.statusCode == 200){
				info1 = JSON.parse(html);
				request(url2, function(error, response, html){
					if(!error && response.statusCode == 200){
						info2 = JSON.parse(html);
						var final_obj = "";
						var count;
						for(var i in info1){
							var author = info1[i];
							count =0;
							for(var j in info2){
								var post = info2[j];
								if(author.id === post.userId){
									count=count+1;
								}
							}
							final_obj = final_obj + author.name + " has " + count + " posts. <br> ";
						}
						res.send(final_obj);
					}
				});
			}
		});
	
		
});

app.get('/setcookie',function(req,res){

	if(req.cookies.name === undefined){
		res.cookie('name', 'George', { expires: new Date(Date.now() + 3600000), httpOnly: true });
		res.cookie('age', '21', { expires: new Date(Date.now() + 3600000), httpOnly: true });
		res.send("The Cookie is Set");
	}
	else{
		res.send("Cookies has already been set");
	}
	
});
app.get('/getcookies',function(req,res){
	if(req.cookies.name === undefined){
		res.send("cookies are not set yet");	
	}
	else{
		var info = "name = " + req.cookies.name + "<br>age = " + req.cookies.age;
		res.send(info);
	}
});

app.get('/robots.txt',function(req,res){
	res.writeHead(301,{ Location: 'http://httpbin.org/deny'});
	res.end();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/html',function(req,res){
	res.sendFile(path.join(__dirname+ '/index.html'));
});

app.get('/image',function(req,res){
	res.sendFile(path.join(__dirname+ '/public/img/31_orig.jpg'));
});

app.get('/input',function(req,res){
	res.sendFile(path.join(__dirname+ '/input.html'));
});
app.post('/upload',function(req,res){
	var input = req.body.inpt;
	console.log(input);
	var message = "Your input is : " + input;
	res.send(message);
});
// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// custom 500 page1
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});

