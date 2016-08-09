/**
 * Created by Roman on 04.06.2016.
 */
var gulp = require('gulp'),
    fs = require('fs');

var pathes = {
    npm: 'node_modules',
    
    gulp_parts: './nodejs/gulpfile_parts',

    app: {
        root: 'app',
        get components() {

            return this.root + '/components';
        },

        get styles() {

            return this.root + '/styles';
        },

        get templates() {

            return this.root + '/templates';
        }
    },

    public: {
        root: 'public',

        get angular() {

            return this.root + '/angularjs2'
        },

        get angular_templates() {
            return this.angular + '/templates'
        },

        get angular_styles() {
            return this.angular + '/styles'
        },

        get vendor_js() {
            return this.root + '/scripts/vendor'
        },

        get vendor_css() {
            return this.root + '/styles/vendor'
        }
    }
};

var defaultTasks = ['watch'],
    watchTasksMap = {},
    gulpPart;

fs.readdirSync(pathes.gulp_parts).forEach(function (file) {

    gulpPart = require(pathes.gulp_parts + '/' + file);

    defaultTasks = defaultTasks.concat(gulpPart.init(gulp, pathes).map(function (task) {

        if (task.watch && task.watch.length) {

            task.watch.forEach(function (path) {

                if (!watchTasksMap[path]) {

                    watchTasksMap[path] = [];
                }

                watchTasksMap[path].push(task.name);
            });
        }

        return task.name
    }));
});

gulp.task('watch', function() {

    for (var path in watchTasksMap) {

        if (watchTasksMap.hasOwnProperty(path)) {

            gulp.watch(path, watchTasksMap[path]);
        }
    }
});

gulp.task('default', defaultTasks);