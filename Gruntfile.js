
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
        compile: {
            options: {
                baseUrl: 'js/',
                name: 'main',
                dir: 'js/target/',
                mainConfigFile: 'js/config.js',
                //out: 'js/compiled.min.js',
                optimize: 'uglify2'
            }
        }
    },
    jshint: {
      files: ['js/**/*.js', 'Gruntfile.js',
      '!**/target/*.js', '!**/vendor/**/*.js',
      '!**/compiled.min.js', '!**/node_modules/**/*.js',
      '!js/script-rmm.min.js'
      ]
      // options: {
      //   jshintrc: '.jshintrc'
      // },
    },
    inline: {
        dist: {
            options:{
                uglify: true
            },
            src: [
            'index-progress.html',
            ]
        }
    },
    less: {
      main: {
        files: {
          'css/less.css': [
            'less/project.less'
          ],

          'css/less-rmm.css': [
            'less/project-rmm.less'
            ],
          'css/less-djof.css': [
            'less/project-djof.less'
          ]
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: true
          },
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'jade/demos/',
          src: ['*.jade'],
          dest: '.',
          ext: '.html'
        },{
          expand: true,
          cwd: 'jade/includes/',
          src: ['**/*.jade'],
          dest: 'html/includes',
          ext: '.html'
        // Above commented snippet is how you can add more bits that need to be compiled
        }]
      }
    },
    // jasmine: {
    //   src: ['js/Player.js', 'js/Song.js'],
    //   options: {
    //     specs: 'test/spec/PlayerSpec.js',
    //     helpers: 'test/spec/SpecHelper.js'
    //   }
    // },
    // recess: {
    //   dist: {
    //     options: {
    //       compile: true,
    //       compress: true
    //     },
    //     files: {
    //       'css/main.min.css': [
    //         'assets/less/app.less'
    //       ]
    //     }
    //   }
    // },
    uglify: {
      dist: {
        files: {
          'js/scripts.min.js': [
            'js/*.js'
            // 'js/vendor/fastclick.js',
            // 'js/plugins/bootstrap/transition.js',
            // 'js/plugins/bootstrap/carousel.js',
            // 'js/_*.js'
          ]
        }
      }
    },
    // concat: {
    //   RMM: {
    //     files: {
    //       'js/script-rmm.min.js' : RMM.scripts
    //     }
    //   }
    // },
    // exec: {
    //   RMM_init: {
    //     cmd: 'RMM.init'
    //   }
    // },

      // collections: {
      //   files: {
      //     'js/collections_all.js' : 'js/app/collection/*.js'
      //   }
      // },
      // models: {
      //   files: {
      //     'js/models_all.js' : 'js/app/model/*.js'
      //   }
      // },
      // view: {
      //   files: {
      //     'js/view_all.js' : 'js/app/view/*.js'
      //   }
      // }
    // version: {
    //   options: {
    //     // file: 'lib/scripts.php',
    //     // css: 'css/main.min.css',
    //     // cssHandle: 'roots_main',
    //     // js: 'js/scripts.min.js',
    //     // jsHandle: 'roots_scripts'
    //   }
    // },
    watch: {
      styles: {
        files: [ 'less/*.less'],
        tasks: ['less']
      },
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      jade: {
        files: ['jade/*.jade','jade/demos/*.jade','jade/includes/**/*.jade'],
        tasks: ['jade']
      }
      // livereload: {
      //   // Browser live reloading
      //   // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
      //   options: {
      //     livereload: false
      //   }
      //   // files: [
      //   //   'css/main.min.css',
      //   //   'js/scripts.min.js',
      //   //   // 'templates/*.php',
      //   //   // '*.php'
      //   // ]
      // }
    },
    clean: {
      dist: [
        // 'css/main.min.css',
        //'js/scripts-rmm.min.js'
        //'index2.html'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-inline');
  //grunt.loadNpmTasks('grunt-exec');
  //grunt.loadNpmTasks('grunt-recess');
  //grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    //'requirejs',
    'jshint',
    'jade',
    'jasmine',
    'clean',
    'less',
    'inline',
    // 'recess',
    //'uglify',
    //'exec',
    'concat'
    //'RMM_remove_define'
    // 'version'
  ]);
  // grunt.registerTask('RMM_remove_define', function () {
  //   RMM.removeDefine();
  // });



};
