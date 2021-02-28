function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let s = amount - contirbution;
    let p = (percent/100)/12;

    let formAmount = s * (percent + percent / (Math.pow(1 + p, date)) -1);

    let = totalAmount = formAmount/100;
    return +totalAmount.toFixed(2)
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
//let a = "Аноним";

    if (name === "") {
        return (`Привет, мир! Меня зовут Аноним.`)
    } else  {
        return (`Привет, мир! Меня зовут ${name}.`)
    };
    // return greeting;
}