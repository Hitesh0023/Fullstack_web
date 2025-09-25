// arr = [2,4,5,7];
// let square = arr.map((el) => el*el);
// console.log(square);

// let sum = arr.reduce((acc,cur) => acc + cur,0);
// console.log(sum)
// let avg = sum/arr.length;
// console.log(avg);

// let numbers = [2,4,6,8,-2,-4];
// console.log(numbers.map((number) => number+5));

// let alpha = ["hitesh",'mahesh','durgesh',"tejas",'pankaj'];
// console.log(alpha.map((alph) => alph.toUpperCase()));

// const doubleAndReturnArgs = (arr,...args) => [
// ...arr,
// ...args.map((v) => v*2),
// ];

// doubleAndReturnArgs([1,2,3],4,4);
// doubleAndReturnArgs([2],10,4);


const mergeObeject = (obj1,obj2) => ({...obj1,...obj2});
mergeObeject ({a:1,b:2},{c:3,d:4});
console.log(mergeObeject);