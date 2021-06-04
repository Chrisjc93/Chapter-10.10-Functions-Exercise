function makeLine(size){
  let numOfHash = "";
  for( let i = 0; i < size; i++){
    numOfHash = numOfHash + "#";
  }
  return numOfHash;
}

console.log(makeLine(5));
console.log("----------------------------");

function makeSquare(size){
  let square = [];
  for(let i=0; i< size; i++){
    square.push(makeLine(size));
  }
  square = square.join('\n');
  return square;
}
console.log(makeSquare(5));

function makeRectangle(width, height){
  let rectangle = "";
    for(let i=0; i< height; i++){
    rectangle = rectangle + makeLine(width) + "\n";
  }
  return rectangle;
}
console.log("----------------------------");
console.log(makeRectangle(5,3));

 function makeDownwardStairs(height){
   let stairs = "";
   for(let i = 0; i <= height; i++){
     stairs = stairs + makeLine(i)+ "\n";
   }
   return stairs;
 }

console.log("----------------------------");
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
  let str1 = "";
  let str2 = "";
  for(let i = 0; i < numSpaces; i++){
    str1 = str1 + " ";
    
  }
  for (let j = 0; j < numChars; j++){
      str2 = str2 + "#";
    }
  return str1+str2+str1;
}
console.log("----------------------------");
console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height) {
  let triangle = [];
  for(let i = 0; i < height; i++){
    let numHash = 2 * i + 1;
   // triangle =  triangle + makeSpaceLine(numHash,i);
    triangle.push(makeSpaceLine(height - i - 1,numHash));
   //triangle = triangle + "\n";
  }
  triangle = triangle.join('\n');
  return triangle;
 }
 console.log("----------------------------");
 console.log(makeIsoscelesTriangle(5));

 function makeDiamond(height) {
   let diamond = makeIsoscelesTriangle(height) + "\n" + makeIsoscelesTriangle(height).split('').reverse().join('');
   return diamond;

   }

 console.log("----------------------------");
 console.log(makeDiamond(5));
 