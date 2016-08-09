/**
 * Created by Roman on 26.07.2016.
 */

exports.init = function(gulp, pathes) {

    gulp.task('app-js', function () {

        return gulp
            .src(pathes.app.root + '/**/*.js')
            .pipe(gulp.dest(pathes.public.angular))
    });

    gulp.task('app-html', function () {
        
        return gulp
            .src(pathes.app.templates + '/**/*.html')
            .pipe(gulp.dest(pathes.public.angular_templates))
    });

    gulp.task('app-css', function () {

        return gulp
            .src(pathes.app.styles + '/**/*.css')
            .pipe(gulp.dest(pathes.public.angular_styles))
    });

    return [{
        name: 'app-js',
        watch: [
            pathes.app.root + '/**/*.js'
        ]
    }, {
        name: 'app-html',
        watch: [
            pathes.app.templates + '/**/*.html'
        ]
    }, {
        name: 'app-css',
        watch: [
            pathes.app.styles + '/**/*.css'
        ]
    }];
};