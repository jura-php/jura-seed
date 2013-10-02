module.exports = function(grunt) {

	grunt.initConfig({

		config: {
			src_dir: 'public',
			dest_dir: 'public/_dist',
		},

		clean: ["<%=config.dest_dir%>"],

		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3
				},

				files: {
					'<%=config.dest_dir%>/img/': ['<%=config.src_dir%>/img/*']
				}
			}

		},

		copy: {
			html:		{src: ['*.html'], dest: '<%=config.dest_dir%>/', expand: true, cwd: '<%=config.src_dir%>/'},
			css:		{src: ['*.css'], dest: '<%=config.dest_dir%>/css/', expand: true, cwd: '<%=config.src_dir%>/css/'},
			htaccess:	{src: ['.htaccess'], dest: '<%=config.dest_dir%>/', expand: true, cwd: '<%=config.src_dir%>/'}
		},

		useminPrepare: {
			html: '<%=config.src_dir%>/index.html',
			options: {
				dest: '<%=config.dest_dir%>'
			}
		},

		usemin: {
			html: ['<%=config.dest_dir%>/index.html']
		},

		manifest: {
			generate: {
				options: {
					basePath: "<%=config.dest_dir%>",
					timestamp: true,
					preferOnline: true
				},

				src: ["**/*.{jpg,png,js,css,html}"],
				dest: "<%=config.dest_dir%>/manifest.appcache"
			}
		},

		watch: {
			options: {
				spawn: false,
				livereload: true
			},

			styles: {
				files: ['public/**/*.styl'],
				tasks: ['css']
			},

			other: {
				files: ['public/**/*', '!public/**/*.styl'],
			}

		},

		stylus: {
			compile: {
				options: {
					paths: ['public'],
					urlfunc: 'embedurl' // use embedurl('test.png') in our code to trigger Data URI embedding
				},
				files: {
					'public/css/main.css': 'public/styl/main.styl'
				}
			}
		},


		sprite: {
			options: {
				imagePath: 'public/img',
				imageHttpPath: '../img',
			},
			build: {}
		},

	});


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-manifest');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-stylus-sprite');

	grunt.registerTask('css', ['sprite', 'stylus'])
	grunt.registerTask('livereload', ['watch']);
	grunt.registerTask('build', ['clean', 'css', 'copy', 'useminPrepare', 'concat', 'usemin', 'uglify', 'imagemin', 'manifest']);



};