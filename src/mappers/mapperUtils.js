const removeDuplicates = (list, currentItem) =>
  list.find(item => item.id === currentItem.id) ?
    list : list.concat(currentItem);

module.exports = { removeDuplicates };
