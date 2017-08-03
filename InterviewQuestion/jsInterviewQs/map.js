'use strict';

const map = (arr, cb, newScope = undefined) => {
  let scope = newScope ? newScope : this;

  if (arr.length === 0) {
    return arr;
  }

  var final = [...arr];

  for (let i = 0; i < arr.length; i++) {
    final[i] = cb.call(scope, arr[i], i, arr);
  }

  return final;
};

module.exports = map;
