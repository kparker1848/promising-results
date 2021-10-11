// const doMath = () => {
//     return new Promise((resolve, reject) => {
//         resolve(slowMath.add(6, 2))
//         reject(new Error("Oops! This did not work."));
//     });
// };
// doMath()
//     .then(resultMult => {
//         console.log(resultMult);
//         return slowMath.multiply(resultMult, 2);

//     }).then(resultDiv => {
//         console.log(resultDiv);
//         return slowMath.divide(resultDiv, 4);

//     }).then(resultSub => {
//         console.log(resultSub);
//         return slowMath.subtract(resultSub, 3);

//     }).then(resultAdd => {
//         console.log(resultAdd);
//         return slowMath.add(resultAdd, 98);

//     }).then(resultRemOne => {
//         console.log(resultRemOne);
//         return slowMath.remainder(resultRemOne, 2);

//     }).then(resultMultTwo => {
//         console.log(resultMultTwo);
//         return slowMath.multiply(resultMultTwo, 50);

//     }).then(resultRemTwo => {
//         console.log(resultRemTwo);
//         return slowMath.remainder(resultRemTwo, 40);

//     }).then(resultAddTwo => {
//         console.log(resultAddTwo);
//         return slowMath.add(resultAddTwo, 32);

//     }).then(finalResult => console.log(`The final result is ${finalResult}`))
//     .catch(errMsg => console.log(errMsg));

const doMath = async () => {
    try {
        let result = await slowMath.add(6, 2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(`The final result is ${result}`);
    } catch (err) {
        console.log(err);
    }
}

doMath()