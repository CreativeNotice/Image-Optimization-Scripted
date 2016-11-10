const gulp     = require( 'gulp' );
const imagemin = require( 'gulp-imagemin' );
const webp     = require( 'gulp-webp' );

gulp.task( 'imagemin', () =>
    gulp.src( 'originals/*.{jpg,jpeg,png,gif,svg}' )
        .pipe( imagemin() )
        .pipe( gulp.dest( 'dist' ) )
);

gulp.task( 'webp', [ 'imagemin' ], () =>
  gulp.src( 'dist/*.{jpg,jpeg,gif}' )
      .pipe( webp() )
      .pipe( gulp.dest( 'dist' ) )
);

gulp.task( 'default', [ 'webp' ] );
