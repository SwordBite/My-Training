function findMax() {
    const numbers = [20, 56, 201, 90, 45];
    let result = Math.max.apply(null, numbers);
    console.log(result);
}
findMax()