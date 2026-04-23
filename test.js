const { sum } = require ('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

test ('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test ("One dollar should be 146.26168224299065 yenes",function(){
    const yenes = fromDollarToYen (100);
    const expected = 100 * 146.26168224299065;
    expect(fromDollarToYen (100)).toBe(14626.168224299065); 
});

test ("One euro should be 1.07 dollars",function(){
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});


test ("One yen should be 0.00555910543130990415335463258786 pounds",function(){
    const pounds = fromYenToPound (1000);
    const expected = 1000 * 0.00555910543130990415335463258786;
    expect(fromYenToPound (1000)).toBe(5.559105431309905); 
});