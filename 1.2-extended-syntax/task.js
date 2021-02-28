function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
    let D = b**2 -4*a*c; // формула дискримента


    if (D < 0) {
    } else if (D == 0) {
        x.push((-b + Math.sqrt(D)) / (2 *a));
    } else (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2 *a));
        x.push((-b - Math.sqrt(D)) / (2 *a));
    };
     return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
  let ratings = [];

  if (ratings == 0) {
      return 0
  } else if (ratings > 5) {
    ratings.slice(0,4);
    return ("Вы хотите вывести больше оценок")
  };
  
  let amount = 0;
  for(let i =0; i = marks.lengts; i++){
      amount += marks[i];
  }

  


    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}