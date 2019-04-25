const format = function(data) {
  let result = {};

  data.forEach(function(transaction) {
    if (!(transaction.category in result)) {
      result[transaction.category] = {
        totalNumber: 1,
        totalValue: transaction.amount,
        averageValue: transaction.amount
      };
    } else {
      let category = result[transaction.category];

      result[transaction.category] = {
        totalNumber: category.totalNumber + 1,
        totalValue: category.totalValue + transaction.amount,
        averageValue: Math.round(
          (category.totalValue + transaction.amount) /
            (category.totalNumber + 1)
        )
      };
    }
  });
  return result;
};

module.exports = {
  format
};
