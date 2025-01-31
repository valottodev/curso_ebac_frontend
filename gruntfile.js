module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "dev/styles/main.css": "src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "dist/styles/main.min.css": "src/styles/main.less",
        },
      },
    },
    replace: {
      dev: {
        src: ["src/index.html"],
        dest: "dev/index.html",
        replacements: [
          {
            from: "@@CSS_END",
            to: "./styles/main.css",
          },
          {
            from: "@@JS_END",
            to: "./scripts/main.js",
          },
        ],
      },
      build: {
        src: ["src/index.html"],
        dest: "dist/index.html",
        replacements: [
          {
            from: "@@CSS_END",
            to: "./styles/main.min.css",
          },
          {
            from: "@@JS_END",
            to: "./scripts/main.min.js",
          },
        ],
      },
    },
    uglify: {
      target: {
        files: {
          "dist/scripts/main.min.js": "src/scripts/main.js",
          "dev/scripts/main.js": "src/scripts/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-text-replace");

  grunt.registerTask("default", ["less:development", "replace:dev"]);
  grunt.registerTask("build", ["less:production", "replace:build", 'uglify']);
};
