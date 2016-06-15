module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jekyll: {
      build : {
        dest: '_site'
      }
    },

    //Concat JavaScript
    concat: {
      dist: {
        src: ['src/js/script/*.js'], 
        dest: 'src/js/main.js'
      }
    }, 

    //Uglify JavaScript
    uglify: {
      my_target: {
        files: {
          'assets/js/main.min.js': 'src/js/main.js'
        }
      }
    },

    compass :  { 
      dev :  { 
        options :  {               
          sassDir :  [ 'src/css/scss' ], 
          cssDir :  [ 'src/css' ], 
          environment :  'development' 
        } 
      },

        prod :  { 
         options :  {               
            sassDir :  [ 'src/css/scss' ], 
            cssDir :  [ 'src/css' ], 
            environment :  'production' 
          } 
        },  
    },
    
        //CSSMin
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'src/css',
              src: ['*.css', '!*.min.css'],
              dest: 'assets/css',
              ext: '.min.css'
            }]
          }
        },

        //Autoprefixer  
        autoprefixer: {
          options: {
            browsers: ['last 15 version', 'ie 8', 'ie 9']
          },
          dist: {
            files: [{
              expand: true,
              cwd: 'src/css',
              src: '**/*.css',
              dest: 'src/css'
            }]
          }
        },        

        //BrowserSync
        browserSync: {
          files: {
            src: ['_site/css/*.css', '_site/index.html']
          },
          options: {
            watchTask: true,
            ghostMode: {
              clicks: true,
              scroll: true,
              links: true,
              forms: true
            },
            server: {
              baseDir: '_site'
            }
          }
        },

        //Watch
        watch: {
            files: ['index.html', 'src/js/*.js', 'src/css/scss/**/*.scss', 'src/css/*.css', '_layouts/*.html', '_includes/*.html', '_posts/*.md', 'assets/css/style.min.css'], 
            tasks: ['concat', 'uglify', 'compass', 'cssmin', 'autoprefixer', 'jekyll']
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-watch');    

    // define default task
    grunt.registerTask('build', ['jekyll']);
    grunt.registerTask('default', ['browserSync', 'watch', 'build']);
};



/* 

            dev: {
                bsFiles: {
                    src : [
                        'assets/css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
*/
