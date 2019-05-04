module.exports = {
  process(_, file) {
    return `var jade = require('jade'); module.exports = jade.compileFile("${file}")()`;
  }
};
