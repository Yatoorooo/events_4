'use strict';
function generateList(array) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result += '<ul>';
            result += generateList(array[i]);
            result += '</ul>';
        } else {
            result += '<li>' + array[i] + '</li>';
        }
    }

    return result;
}


const array = [1, 2, 3, [1.1, 1.2, 1.3], 4, [5, 6]];
const list = generateList(array);
console.log(list);