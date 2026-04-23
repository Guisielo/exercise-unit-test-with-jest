const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEurols = {
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87,
}

function fromDollarToYen (dolar){
    let euros = dolar/(oneEurols.USD)
    let yenes = euros * (oneEurols.JPY)
    return yenes
}

function fromEuroToDollar (euro){
    let dolar = euro * (oneEurols.USD)
    return dolar
}

function fromYenToPound (yen){
    let euros = yen/(oneEurols.JPY)
    let pounds = euros *(oneEurols.GBP)
    return pounds
}

module.exports =  {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
};