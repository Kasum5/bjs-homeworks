//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalidrome = function isPalidrome(){
    let string = this.toLowerCase().replace(/\s/g,'').split('');
    let reverseString = string.split("").reverse().join("")
    let result = reverseString.localeCompare(string);
    if(result == 0){
      return true
    } else {
      return false
    };
  }


function getAverageMark(marks) {
    // код для задачи №2 писать здесь

    let average;
    let roundedAverage;
  
    if(marks.length == []){
      return 0
    } else {
      let sum = 0;
    for (let i = 0; i < marks.length; i++){
     sum += marks[i];
     average = sum / marks.length;
     roundedAverage = Math.round(average);
    };
    return roundedAverage;
    };
}


function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
  let msPerYear = 365.242 * 24 * 60 * 60 * 1000;
  let now = new Date().getTime();
  let birthday1 = +new Date(birthday);
  let diff = now - birthday1;
  let age = diff / msPerYear;
  if(age > 18){
    return age;
  };
    // return verdict
}