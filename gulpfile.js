/**
 * Created by Roman on 04.06.2016.
 */
var gulp = require('gulp')
;

var config = {
    bowerDir: 'bower_components',
    npmDir: 'node_modules',
    publicDir: 'public',
    assetsDir: 'assets',
    appDir: 'app'
};


gulp.task('vendor_scripts', function () {
    return gulp.src([

        config.npmDir + '/core-js/client/shim.min.js',
        config.npmDir + '/zone.js/dist/zone.js',
        config.npmDir + '/reflect-metadata/Reflect.js',
        config.npmDir + '/systemjs/dist/system.src.js'

    ])
        .pipe(gulp.dest(config.publicDir + '/scripts/vendor'))
});

gulp.task('angular_scripts', function () {
    return gulp.src([

        config.appDir + '/app.component.js',
        config.appDir + '/main.js'

    ])
        .pipe(gulp.dest(config.publicDir + '/scripts/angular'))
});


gulp.task('angular_libs_@angular', function () {
    return gulp.src([

        config.npmDir + '/@angular/**/*.js'

    ])
        .pipe(gulp.dest(config.publicDir + '/scripts/angular/libs/@angular'))
});

gulp.task('angular_libs_angular_memory_api', function () {
    return gulp.src([

        config.npmDir + '/angular2-in-memory-web-api/**/*.js'

    ])
        .pipe(gulp.dest(config.publicDir + '/scripts/angular/libs/angular2-in-memory-web-api'))
});


gulp.task('angular_libs_rxjs', function () {
    return gulp.src([

        config.npmDir + '/rxjs/**/*.js'

    ])
        .pipe(gulp.dest(config.publicDir + '/scripts/angular/libs/rxjs'))
});


gulp.task('default', [
    'vendor_scripts',
    'angular_scripts',
    'angular_libs_@angular',
    'angular_libs_angular_memory_api',
    'angular_libs_rxjs'
]);