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
			html: 'app/views/**/*',
			options: {
				dest: '<%=config.dest_dir%>'
			}
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

		includeFTP: {
			all: {
				files: [
					{dest: '<%=config.dest_dir%>/css/main.css', src: '<%=config.src_dir%>/css/*.css'},
					{dest: '<%=config.dest_dir%>/js/main-built.js', src: '<%=config.src_dir%>/js/**/*.js'},
					{src: ['**/*'], dest: '<%=config.dest_dir%>/img', expand: true, cwd: '<%=config.src_dir%>/img'},
					{src: ['{*.eot,*.svg,*.woff,*.ttf}'], dest: '<%=config.dest_dir%>/css', expand: true, cwd: '<%=config.src_dir%>/css/fonts'}
				]
			}

		}
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
	grunt.loadNpmTasks('grunt-git-ftp-include');

	grunt.registerTask('css', ['sprite', 'stylus'])
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('build', ['clean', 'css', 'copy', 'useminPrepare', 'concat', 'uglify', 'imagemin', 'manifest', 'includeFTP']);



};