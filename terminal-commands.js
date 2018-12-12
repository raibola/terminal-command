const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
          }, '');
       
          console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.writeFile('file.txt', 'w', 'utf8', (err) => {
        if (err) throw err;
      
        console.log('success')
      });
 };
  
  module.exports.mkdir = () => {
    fs.mkdir('/tmp/test',function(err){
        if (err) {
            return console.error(err);
        }
    console.log("Directory created successfully!");
    });
  };