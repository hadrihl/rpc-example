var qrpc = require('qrpc');
var server = qrpc.createServer();

server.addHandler('echo', function(req, res, next) {
	//echo send two response messages
	var err = null;

	res.write('hello'); // first response
	next(err, req.m);		// final response
});

server.addHandler('average', function(req, res, next) {
	var err = null;

	res.write('calculate average:');
	console.log(req.m);

	var tmp = req.m;
	var avg = 0;
	for(var i = 0; i < tmp.val.length; i++) {
		avg += tmp.val[i];
		//console.log(avg);
	}

	avg = avg / tmp.val.length;
	console.log(avg);

	next(err, avg);
});

server.listen(55555, function() {
	console.log("qrpc is listening on port: 55555");
});