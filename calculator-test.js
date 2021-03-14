
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 200, years: 10, rate: 3.5})).toEqual('1.98');
  expect(calculateMonthlyPayment({amount: 100, years: 5.5, rate: 3.4})).toEqual('1.66')
  expect(calculateMonthlyPayment({amount: 10, years: 5, rate: 10})).toEqual('0.21')


});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 200, years: 10, rate: 3.5})).toEqual('1.98');
  expect(calculateMonthlyPayment({amount: 100, years: 5.5, rate: 3.4})).toEqual('1.66')
  expect(calculateMonthlyPayment({amount: 10, years: 5, rate: 10})).toEqual('0.21')
});

// / etc
