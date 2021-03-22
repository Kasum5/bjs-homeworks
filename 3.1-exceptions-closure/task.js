class Triangle {
  constructor(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a > this.b + this.c || this.b > this.c + this.c || this.c > this.b + this.a) {
      throw new Error("Трегуогольник с такими сторонами не существует!");
    };

  }
getPerimeter(){
  let p = this.a + this.b + this.c;
   return p
} 
getArea(){
  let pHalf = (this.a + this.b + this.c) / 2;
  let s = Math.sqrt(pHalf * (pHalf - this.a) * (pHalf - this.b) * (pHalf - this.c));
  return  +s.toFixed(3)
}
someMethod(a,b,c){
  try {
    return new Triangle(a,b,c);
  } catch {
     alert 
  };
}
}
