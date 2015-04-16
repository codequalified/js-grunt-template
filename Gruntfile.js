module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: '\n;'
            },
            dist: {
                // the files to concatenate
                src: ['bower_components/jquery/dist/jquery.min.js','src/**/*.js'],
                // the location of the resulting JS file
                dest: 'dist/main.js'
            }
        },
        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'tap'
            },
            all: { src: ['dist/main.js','test/*.js'] }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.registerTask('default', ['jshint','concat','simplemocha']);
    
};
