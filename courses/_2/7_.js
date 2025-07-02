const lodash = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = lodash.flatMapDeep(items)

console.log(newItems);
