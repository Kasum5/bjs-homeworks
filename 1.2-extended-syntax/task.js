function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
    let D = b**2 - 4*a*c; // формула дискримента

    if (D == 0) {
       x.push((-b + Math.sqrt(D)) / (2 *a));
    } else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2 *a));
        x.push((-b - Math.sqrt(D)) / (2 *a));
    };
     return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if (marks.length == []) {
        return(0);
     };
     
     marks = marks.slice(0,5)
     let ratings = 0;
    for(let i = 0; i < marks.length; i++){
       ratings += marks[i];
    };
      if (marks.length <= 5) {   
          return (ratings / marks.length);     
     } else if (marks.length > 5) {
            return (ratings / marks.length);
      };

    //return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = dateOfBirthday.getFullYear();
    let date = new Date().getFullYear();

    if ((date - age) >= 18) {
      return(`Не желаете ли олд-фэшн, ${name}?`);
    } else if ((date - age) < 18) {
         return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
    };
  
    // return result;
}
