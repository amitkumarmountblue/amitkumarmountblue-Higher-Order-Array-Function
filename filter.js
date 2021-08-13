const filter = (items, cb) => {
    const result = [];
    for (let i = 0; i < items.length; i++) {
      if (cb(items[i])) {
        result.push(items[i]);
      }
    }
    return result;
  };

  module.exports = filter;