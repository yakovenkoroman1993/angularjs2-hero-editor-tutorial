/**
 * Created by Roman on 26.07.2016.
 */

exports.init = function(gulp, pathes) {

    gulp.task('app-js', function () {

        return gulp
            .src(pathes.app + '/**/*.js')
            .pipe(gulp.dest(pathes.public_scheme.angular))
    });

    gulp.task('app-html', function () {

        return gulp
            .src(pathes.app + '/**/*.html')
            .pipe(gulp.dest(pathes.public_scheme.angular_templates))
    });

    gulp.task('app-css', function () {

        return gulp
            .src(pathes.app + '/**/*.css')
            .pipe(gulp.dest(pathes.public_scheme.angular_styles))
    });

    return [{
        name: 'app-js',
        watch: [
            pathes.app + '/**/*.js'
        ]
    }, {
        name: 'app-html',
        watch: [
            pathes.app + '/**/*.html'
        ]
    }, {
        name: 'app-css',
        watch: [
            pathes.app + '/**/*.css'
        ]
    }];
};