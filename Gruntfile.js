module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    exec: {    
      list_files: {
        cmd: 'java -jar ./lib/helloworld.jar'
      }
    }
  });

  grunt.registerTask('default', ['exec']);
};