//console.log('Hello World!');

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

const fromEuroToDollar = euro => {
    return euro * 1.206;
}

console.log(fromEuroToDollar(120));


const fromDollarToYen = dollar => {
    return dollar * 127.9;
}

console.log(fromDollarToYen(100));

const fromYenToPound = yen => {
    return yen * 0.8;
}

console.log(fromYenToPound(100));


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

