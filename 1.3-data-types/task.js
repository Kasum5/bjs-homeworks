function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let s = amount - contribution;
    let p = percent / 100 / 12;
    let n = 12;

    let formAmount = s * (p + p / ((Math.pow(1 + p) ** n) -1));
    let totalAmount = formAmount * n;

    return +totalAmount.toFixed(2)
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь

    if (name === "" || name == null) {
        return (`Привет, мир! Меня зовут Аноним.`)
    } else  {
        return (`Привет, мир! Меня зовут ${name}.`)
    };
    // return greeting;
}
