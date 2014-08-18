module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        watch: {
            livereload: {
                files: [],
                options: { livereload: true },
            },
            coffee: {
                files: ['app/coffee/**/*.coffee'],
                tasks: ['coffee:compile']
            },
            jade: {
                files: ['app/jade/**/*.jade'],
                tasks: ['jade:compile']
            },
            stylus: {
                files: ['app/stylus/**/*.styl'],
                tasks: ['stylus:compile']
            }
        },
        coffee: {
            compile: {
                options: {
                    join: true
                },
                files: [{
                    expand: true,
                    cwd: "app/coffee/",
                    src: ['**/*.coffee'],
                    dest: 'app/static/js',
                    ext: '.js'
                },{
                    expand: true,
                    cwd: "app/coffee/controllers/",
                    src: ['**/*.coffee'],
                    dest: 'app/static/js/controllers',
                    ext: '.js'
                }]
            }
        },
        jade: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "jade/",
                    src: ['index.jade'],
                    dest: 'build',
                    ext: '.html'
                }]
            }
        },
        stylus: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "stylus/",
                    src: ['**/*.styl'],
                    dest: 'build',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.registerTask('server', ['shell:runserver', 'watch'])
};
