"use strict";

var peopleFilter = {};

peopleFilter.exclude = function(people, list) {
  if (!people) return [];

  let filterList = list.split(",").map(id => parseInt(id));

  return people.filter(p => filterList.indexOf(p.id) === -1);
};

module.exports = peopleFilter;
