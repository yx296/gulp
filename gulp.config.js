module.exports = function() {
	var client = './src/client';
	var clientApp = client + 'app/';
	var config = {
		temp: './.tmp/',
		// all js you want to vet
		
		alljs: [
			'./src/**/*.js',
			'./*.js'
		],
		index: client + 'index.html',
		js: [
			clientApp + '**/*.module.js',
			clientApp + '**/*.js',
			'!' + clientApp + '**/*.spec.js'
		],
		less: client + '/styles/styles.less'
	};
	
	return config;
};
