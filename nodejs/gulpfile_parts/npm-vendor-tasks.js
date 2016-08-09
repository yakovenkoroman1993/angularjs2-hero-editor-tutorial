/**
 * Created by Roman on 24.07.2016.
 */

exports.init = function(gulp, pathes) {

    gulp.task('npm-vendor-js', function () {

        return gulp
            .src([
                pathes.npm + '/tether/dist/js/tether.min.js',
                pathes.npm + '/jquery.2/node_modules/jquery/dist/jquery.min.js',
                pathes.npm + '/bootstrap/dist/js/bootstrap.min.js'
            ])
            .pipe(gulp.dest(pathes.public.vendor_js))
    });

    gulp.task('npm-vendor-css', function () {

        return gulp
            .src([
                pathes.npm + '/tether/dist/css/tether.min.css',
                pathes.npm + '/bootstrap/dist/css/bootstrap.min.css',
                pathes.npm + '/font-awesome/css/font-awesome.min.css'
            ])
            .pipe(gulp.dest(pathes.public.vendor_css))
    });

    gulp.task('font-awesome-fonts', function () {

        return gulp
            .src(pathes.npm + '/font-awesome/fonts/*.*')
            .pipe(gulp.dest(pathes.public.root + '/styles/fonts'))
    });

    return [{
        name: 'npm-vendor-js'
    }, {
        name: 'npm-vendor-css'
    }, {
        name: 'font-awesome-fonts'
    }];
};