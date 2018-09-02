module.exports = function(grunt) {
  grunt.initConfig({
	// get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),



		// configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
		    expaned: true,
        files: {
         
		  'dist/js/angular-utility.min.js':[
		  'plugins/angular-1.5.9/angular.js',
		  'plugins/angular-1.5.9/angular-resource.js',
		  'plugins/angular-1.5.9/angular-cookies.js',
		  'plugins/angular-1.5.9/angular-sanitize.js',
		  'plugins/angular-1.5.9/angular-animate.js',
		  'plugins/angular-1.5.9/angular-touch.js',
		  'plugins/angular-1.5.9/angular-route.js',
		   'plugins/angular-1.5.9/angular-messages.js'									  
		  ],
		  'dist/js/anjs-app.js':[

			'app/app.module.js',
			'app/modules/carerDashboard/carerDashboard.module.js',
			'app/modules/login/login.module.js',	
			'app/modules/login/config.route.js',
			'app/modules/carerDashboard/carerDashboard.config.route.js',
			'app/modules/carerDashboard/carerDashboard.directive.js',
			'app/mainCtrl.js',
			'app/services/commonService.js'

		  ],
		  'dist/js/plugins.min.js':[
		 'assets/global/plugins/ocLazyLoad/dist/ocLazyLoad.min.js',
		 'assets/global/plugins/jquery/jquery-2.2.4.min.js',
		 'assets/global/plugins/bootstrap-3.3.6/dist/js/bootstrap.min.js'
		 ],
		}
	}
},

	env : {
		options : {
			/* Shared Options Hash */
			//globalOption : 'foo'
		},
		dev: {
			NODE_ENV : 'DEVELOPMENT'
		},
		qa : {
			NODE_ENV : 'PRODUCTION'
		},
		prod : {
			NODE_ENV : 'PRODUCTION'
		},
		uat : {
			NODE_ENV : 'PRODUCTION'
		}
	},
	preprocess : {
		html : {
			src : 'index/index.html',
			dest : 'index.html'
		}
	},
  less: {
     build: {
       files: {
				 'css/l-custom.css': 'css/l-custom.less',
				 'css/include.css': 'assets/global/css/include.less'
				 
       }
     }
   },
	versioning: {
			options: {
				grepFiles: [
				'index.html',
				]
			},
				app: {
					src: [
					'css/l-custom.css',
					'dist/js/angular-utility.min.js',
					'dist/js/anjs-app.js',
					'dist/js/theme-utility.min.js',
					'dist/js/plugins.min.js'						
					]
				}
	},

	cssmin: {
		options: {
		 mergeIntoShorthands: false,
		 roundingPrecision: -1
		 },
		 target: {
		 files: {
			'assets/global/css/include-custom.css': [
			'assets/global/css/include-custom.css'
			],
		
			'css/l-custom.css':[
			'css/l-custom.css'
			]
		 }
		 }
	},

	watch: { //watch for any updats in the less file. If any update detected the new css will be generated automatically.
		files: "css/*.less",
		tasks: ['less', 'cssmin', 'versioning']
	}
  });

	

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-version-assets');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-preprocess');


	grunt.registerTask('dev', ['less', 'env:dev','preprocess']);
	grunt.registerTask('prod', ['less',  'cssmin', 'uglify', 'env:prod', 'preprocess', 'versioning']);

	
};
