// Your code here

class Polygon {
  
  constructor(arr){
    
    this.arr = arr;
    
  }
  
  get countSides() {
    return this.arr.length;
  }
  
  get perimeter() {
    this.arr.reduce((a, b) => a + b, 0);
  }
  
}

class Triangle extends Polygon {
  constructor(arr){
    super(arr);
  }
  
  get isValid() {
    if (arr.length === 2) return true;
    else return false;
  }
}

class Square extends Polygon {
  
  get isValid() {
    if(this.arr[0] === this.arr[1] === this.arr[2] === this.arr[3]){
      return true;
    } 
  }
  
  get area(arr) {
    if(isValid(arr)) {
      return arr.reduce((a, b) => a + b, 0);
    }
  }
  
}











