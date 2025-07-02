const names = require('./names.js');
const hiSayer = require('./utils.js');
const alternative = require('./alternative.js');
require('./lero.js');

hiSayer("Goiabada");
[
    ...names, 
    alternative.person.name
].forEach(name => hiSayer(name));

alternative.items.forEach(name => hiSayer(name));

