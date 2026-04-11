const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      if(file.endsWith('.tsx')) filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

const allFiles = walkSync('/home/leac1m/projects/Talentflow_lms/src/pages');

allFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // text-6xl
  content = content.replace(/(?<!(sm:|md:|lg:|xl:))text-6xl/g, 'text-4xl sm:text-5xl lg:text-6xl');
  // text-5xl
  content = content.replace(/(?<!(sm:|md:|lg:|xl:))text-5xl/g, 'text-3xl sm:text-4xl lg:text-5xl');
  // text-4xl
  content = content.replace(/(?<!(sm:|md:|lg:|xl:))text-4xl/g, 'text-2xl sm:text-3xl md:text-4xl');
  // text-3xl
  content = content.replace(/(?<!(sm:|md:|lg:|xl:))text-3xl/g, 'text-xl sm:text-2xl md:text-3xl');

  // Reduce text-lg and text-xl slightly for mobile
  // content = content.replace(/(?<!(sm:|md:|lg:|xl:))text-2xl/g, 'text-lg sm:text-xl lg:text-2xl');
  // content = content.replace(/(?<!(sm:|md:|lg:|xl:))text-xl/g, 'text-base sm:text-lg lg:text-xl');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated typography in ${path.basename(f)}`);
  }
});

