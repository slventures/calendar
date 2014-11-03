module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> - ' +
					'https://github.com/Serhioromano/bootstrap-calendar */\n'
			},
			build: {
				src: 'js/calendar.js',
				dest: 'js/calendar.min.js'
			}
		}
	});

	// Load the plugin that provides the tasks.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);

};
