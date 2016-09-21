module.exports = function() {
	var config = {

		// all js you want to vet
		alljs: [
			'./src/**/*.js',
			'./*.js'
		]
	};
	
	return config;
}