const format = function(data) {
  let result = {};

  data.forEach(function(transaction) {
    const slicedDate = transaction.paymentDate.slice(0, 10);
    if (!(slicedDate in result)) {
      result[slicedDate] = {
        totalNumber: 1,
        totalValue: transaction.amount,
        averageValue: transaction.amount
      };
    } else {
      let date = result[slicedDate];

      result[slicedDate] = {
        totalNumber: date.totalNumber + 1,
        totalValue: date.totalValue + transaction.amount,
        averageValue: Math.round(
          (date.totalValue + transaction.amount) / (date.totalNumber + 1)
        )
      };
    }
  });
  return result;
};

module.exports = {
  format
};
