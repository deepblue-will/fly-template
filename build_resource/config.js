module.exports = {
  sass: {
    src: "app/styles/styles.scss",
    target: "dist/styles",
    watch: "app/styles/**/*.scss",
    options: {
      includePaths: [
        "app/styles",
        "app/bower_components/support-for/sass",
        "app/bower_components/normalize-scss/sass"
      ],
      outputStyle: "expanded",
      sourceMap: true
    }
  },
  postcss: {
    options: {
      processors: [
        require('autoprefixer')({browsers: ['> 5%']}),
        require("css-mqpacker")()
      ]
    }
  },
  js: {
    src: "app/scripts/app.js",
    target: "dist/scripts",
    watch: "app/scripts/**/*.js",
    concat: "app.js",
    options: {
      presets: ["es2015"],
      sourceMaps: true
    }
  },
  mainBowerFiles: {
    options: {filter: /.*js$/}
  },
  jade: {
    src: "app/views/*.jade",
    target: "dist",
    watch: "app/views/**/*.jade",
    options: {
      pretty: true,
      base: "app/views"
    }
  },
  asset: {
    src: "app/assets/**/*",
    target: "dist/",
    watch: "app/assets/**/*"
  },
  server: {
    options: {server: {baseDir: "dist"}}
  }
};