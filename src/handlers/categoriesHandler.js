const format = function(data) {
  console.log(">", data);
  console.log(">>", data[0].category);
  let result = {};

  result = {
    Groceries: {
      totalNumber: data.length,
      totalValue: data[0].amount,
      averageValue: Math.round(data[0].amount / data.length)
    }
  };
  console.log(">>>", result);

  return result;
};

module.exports = {
  format
};
