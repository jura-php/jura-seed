module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		config: {
			src_dir: 'public',
			dest_dir: 'public/_dist',
			banner: [
				'/*',
				' * <%= pkg.name %> - <%= pkg.version %>',
				' * Copyright (c) <%= grunt.template.today("yyyy") %> Joy Interactive',
				' */\n'
			].join('\n')
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
			gif:		{src: ['*.gif'], dest: '<%=config.dest_dir%>/img/', expand: true, cwd: '<%=config.src_dir%>/img/'},
			folders:	{src: ['**', '\.*', '!styl/**', '!js/**', '!img/**', '!_dist/**'], dest: '<%=config.dest_dir%>', expand: true, cwd: '<%=config.src_dir%>'}

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
				options: {
					spawn: true,
					livereload: false
				},
				files: ['<%=config.src_dir%>/**/*.styl'],
				tasks: ['css']
			},

			other: {
				files: ['<%=config.src_dir%>/**/*', '!<%=config.src_dir%>/**/*.styl'],
			}

		},

		uglify: {
			options: {
				banner: '<%=config.banner%>'
			}
		},

		stylus: {
			compile: {
				options: {
					banner: '<%=config.banner%>',
					paths: ['<%=config.src_dir%>'],
					urlfunc: 'embedurl' // use embedurl('test.png') in our code to trigger Data URI embedding
				},
				files: {
					'<%=config.src_dir%>/css/main.css': '<%=config.src_dir%>/styl/main.styl'
				}
			}
		},

		sprite: {
			options: {
				imagePath: '<%=config.src_dir%>/img',
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

		},


		// "s3-sync": {
		// 	options: {
		// 		key: 'AKIAIUT4G42SWHKDWAGA',
		// 		secret: '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',
		// 		bucket: [NOME-DO-PROJETO],
		// 		region: 'sa-east-1', //SP

		// 		headers: {
		// 			// Two Year cache policy (1000 * 60 * 60 * 24 * 730)
		// 			"Cache-Control": "max-age=630720000, public",
		// 			"Expires": new Date(Date.now() + 63072000000).toUTCString()
		// 		}
		// 	},
		// 	prod: {
		// 		files: [
		// 			{
		// 				gzip: false,
		// 				root: '<%=config.src_dir%>',
		// 				src: '<%=config.src_dir%>/**/*',
		// 				dest: '/'
		// 			}
		// 		]
		// 	}
		// }
		//
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
	// grunt.loadNpmTasks('grunt-s3-sync');

	grunt.registerTask('css', ['sprite', 'stylus'])
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('build', ['clean', 'css', 'copy', 'useminPrepare', 'concat', 'uglify', 'imagemin', 'manifest', 'includeFTP']);


	grunt.registerTask('doctor', 'Verify the current status of configuration', function(){
		var done = this.async();
		var pkg = grunt.config('pkg');
		var error = false;


		//Todo: s3-sync
		grunt.util.async.parallel([
			//Git
			function(callback){
				grunt.util.spawn({
					cmd : 'git',
					args : ['config', '--get-all', 'remote.origin.url']
				}, function (err, result) {
					if (err) {
						error = true;
						callback(null)
					} else {
						if('git@bitbucket.org:joyinteractive/joy-seed.git' == result.stdout){
							grunt.log.error(('WARNING:').bold + ' You are currently using the repository of Joy Seed. Run the ' + ('$ rm -Rf .git').bold + ' command and then a ' + ('$ git init').bold );
							error = true;
						}
						callback(null)
					}
				});
			},

			//Package.json
			function(callback) {
				if(pkg.name == 'joy-seed') {
					grunt.log.error('You need to change de package.json file and set your app information');
					error = true;
				}

				callback(null);
			}

		], function(err, results){
			if(!error) {
				grunt.log.ok('All right')
			}

			done();
		});


	});

	grunt.registerTask('help', 'A simple help', function(){
		grunt.log.subhead(('$ grunt css').cyan);
		grunt.log.writeln('Generate the /public/css/main.css file that corresponds to /public/styl/main.styl');

		grunt.log.subhead(('$ grunt dev').cyan);
		grunt.log.writeln('Start the watch task that will generate the /public/css/main.css automatically when it changes and enable the livereload. Do not forget the LiveReload chrome extension.');

		grunt.log.subhead(('$ grunt build').cyan);
		grunt.log.writeln('Generate a `compiled` version of the project on /public/_dist/ directory. To configure the project to use the compiled version you need to set the '+('usedist').bold+' application config to true on /app/config/application.php');
	})



};