function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  const fee = daysLate * ratePerDay;
  if (daysLate <= 1) {
    return 0;
  }
  
  if (fee > 20) {
    return 20;
  }
  
  return Math.round(fee);
}

module.exports = { isValidLoan, calculateLateFee };
