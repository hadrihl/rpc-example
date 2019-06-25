var qrpc = require('qrpc');

var client = qrpc.connect(55555, '127.0.0.1', function whenConnected() {
	console.log("connected!");

	client.call('echo', { a: 12, b: 13 }, function(err, ret) {
		// client callback is invoked on every response message
		console.log("reply from server:", ret);
		// => reply from server: 'TEST RUN!'
		// => reply from server: { a, 1, b: 'test' }
	});


	client.call('average', { val: [1, 2, 3, 4, 5] }, function(err, ret) {
		console.log("reply from server:", ret);
	});
});