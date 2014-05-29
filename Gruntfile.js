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
                    cwd: "app/jade/partials/",
                    src: ['**/*.jade'],
                    dest: 'app/static/views',
                    ext: '.html'
                },{
                    expand: true,
                    cwd: "app/jade/",
                    src: ['index.jade'],
                    dest: 'app/templates',
                    ext: '.html'
                }]
            }
        },
        stylus: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "app/stylus/",
                    src: ['**/*.styl'],
                    dest: 'app/static/css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.registerTask('server', ['shell:runserver', 'watch'])
};
