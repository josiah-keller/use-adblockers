const fs = require("fs");
const ejs = require("ejs");

module.exports = function subtemplate(filename, data) {
    return function() {
        let file = fs.readFileSync(filename, "utf-8");
        return ejs.render(file, data);
    };
};