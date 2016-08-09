/**
 * Created by Roman on 24.07.2016.
 */

exports.init = function(gulp, pathes) {

    gulp.task('angularjs2-libs', function () {

        return gulp
            .src([
                pathes.npm + '/core-js/client/shim.min.js',
                pathes.npm + '/zone.js/dist/zone.js',
                pathes.npm + '/reflect-metadata/Reflect.js',
                pathes.npm + '/systemjs/dist/system.src.js'
            ])
            .pipe(gulp.dest(pathes.public.angular + '/libs'))
    });

    gulp.task('@angular-dir', function () {

        return gulp
            .src(pathes.npm + '/@angular/**/*.js')
            .pipe(gulp.dest(pathes.public.angular + '/libs/@angular'))
    });

    gulp.task('angular2-in-memory-web-api-dir', function () {

        return gulp
            .src(pathes.npm + '/angular2-in-memory-web-api/**/*.js')
            .pipe(gulp.dest(pathes.public.angular + '/libs/angular2-in-memory-web-api'))
    });

    gulp.task('rxjs-dir', function () {

        return gulp
            .src(pathes.npm + '/rxjs/**/*.js')
            .pipe(gulp.dest(pathes.public.angular + '/libs/rxjs'))
    });

    return [{
        name: 'angularjs2-libs'
    }, {
        name: '@angular-dir'
    }, {
        name: 'angular2-in-memory-web-api-dir'
    }, {
        name: 'rxjs-dir'
    }];
};