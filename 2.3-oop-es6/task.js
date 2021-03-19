class PrintEditionItem {
  constructor(name,releaseDate,pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  };
fix(){
    this.state = this.state * 1.5;
    return this.state;
};
set state(state){
    if(state < 0){
      return this._state = 0;
    } else if(state > 100){
        return this._state = 100;
    } else{
        return this._state = state;
    }
};
get state(){
  return this._state;
};
}
class Magazine extends PrintEditionItem {
  constructor(name,releaseDate,pagesCount){
    super(name,releaseDate,pagesCount)
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author,name,releaseDate,pagesCount){
    super(name,releaseDate,pagesCount)
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author,name,releaseDate,pagesCount){
    super(author,name,releaseDate,pagesCount)
    this.type = "novel";
  }
}
class DetectiveBook extends Book {
  constructor(author,name,releaseDate,pagesCount){
    super(author,name,releaseDate,pagesCount)
    this.type = "detective";
  }
}
class FantasticBook extends Book {
  constructor(author,name,releaseDate,pagesCount){
    super(author,name,releaseDate,pagesCount)
    this.type = "fantastic";
  }
}
/*
const picnick = new FantasticBook("Kasum", "fff", "ffhf", 1972, 168);
console.log(picnick);
picnick.state = 10;
console.log(picnick.state);
picnick.fix();
console.log(picnick.state);
*/


class Library {
  constructor(name,books){
    this.name = "Библеотека имени Ленина";
    this.books = [];
  };
  addBook(book){
    this.book = book;
        this.books.push(this.book);
    return this.books
  }
  findBookBy(type,value){
    for(let i = 0; i < this.books.length; i++){
      if(this.books[i][type] === value) return this.books[i];
    }
    return null
  }
giveBookByName(bookName){
  for(let i = 0; i < this.books.length; i++){
    if(this.books[i].name === bookName) return this.books.splice([i],1);
  };
  return null;

  }
}
  const library = new Library("Библеотека имени Ленина");

  library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей", 2019, 1008));
  //library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
  //library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  //library.addBook(new Magazine("Мурзилка", 1924, 50));

  console.log(library.findBookBy("name","Полное собрание повестей"));


class StudentLog {
  constructor(name){
    this.name = name;
    this.jornal = {};
  };
  getName(){
    return this.name;
  };
  addGrade(grade,subject){
    this.grade = grade;
    this.subject = subject;
    if(this.grade >= 1 && this.grade <= 5){
        this.jornal.push(this.grade);
         return this.jornal;
    }else {
      return 'Вы пытались поставить оценку ' + this.grade  + ' по предмету ' +  this.subject + '. Допускаются только числа от 1 до 5.'
    };
  }; 
  getAverageBySubject(subject){
    this.subject = subject; 
      let averageRating;
      let sum = 0;
    if (this.subject === "algebra" || this.subject === "geometry"){
        for(let i = 0; i < this.jornal.length; i++){
          sum += this.jornal[i];
          averageRating = sum / this.jornal.length
        };
        return averageRating;
    } else {
      return 0
    };
  };
  getTotalAverage(){
    if (this.jornal.length === 0){
      return 0
    } else {
      let sumAverage = 0;
      for(let i = 0; i < this.jornal.length; i++){
        sumAverage += this.jornal[i];
      };
       return sumAverage / this.jornal.length
    };
  };
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName());
console.log(log.addGrade(3,'algebra'));
console.log(log.addGrade(3,'algebra'));
console.log(log.addGrade(4,'geometry'));
console.log(log.addGrade(5,'geometry'));
console.log(log.getAverageBySubject("algebra"));

console.log(log.getTotalAverage());
