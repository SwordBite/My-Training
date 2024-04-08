function removeFromArray() {
    let myArray = [12, true, "Chair"];
    const removeByIndex = myArray.splice(0, 1);
    console.log(myArray);
}
removeFromArray();