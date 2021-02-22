// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
//Description of the test.
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('One Euro should be 1.206', () => {

    const dollars = fromEuroToDollar(10);

    const expected = 10 * 1.206;

    expect(expected).toBe(dollars);
});


test('One Dollar should be 106.15', () => {
    const yen = fromDollarToYen(10);

    const expected = 10 * 106.15;

    expect(expected).toBe(yen);
});

test('One Yen should be 0.0062', () => {
    const pound = fromYenToPound(12);

    const expected = 12 * 0.0062;

    expect(expected).toBe(pound);
});


