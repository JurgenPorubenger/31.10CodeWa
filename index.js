console.log('j');

// function digPow(n, p){
//     let powItem=p;
//     let a = (''+n).split('').map(item=>{
//         let i = Math.pow(+item,powItem);
//         powItem++;
//         return i;
//     });
//     let b = a.reduce((accum,iterator)=>{
//         return accum+iterator
//     });
//     if(b%n===0&&b>=n){
//         return b/n;
//     }else {
//         return -1;
//     }
// }
//
// console.log(digPow(46288, 3));

// function findNextSquare(sq) {
//     if(Number.isInteger(Math.sqrt(sq))){
//         let v = Math.sqrt(sq);
//         v++;
//         return Math.pow(v,2);
//     }else {
//         return -1;
//     }
// }
// console.log(findNextSquare(121));



// function towerBuilder(nFloors) {
//     let arr = [];
//     let star='';
//     let d = '';
//     for(let i=0; i<=nFloors; i++) {
//         // d+=' ';
//         for(let k=1; k<i; k++){
//             star+='* ';
//             console.log(star);
//
//         }
//
//     };
//
//     // let arr2 = arr.map((item, i, array)=>{
//     //     return String.length=item;
//     // }).reverse();
//     return arr;
// }
//
// console.log(towerBuilder(4) );


//
// function towerBuilder(nFloors) {
//     function makeLine(len) {
//        let line = '*';
//        for(let j=1; j<len; j++) {
//            line+='**';
//        }
//        return line;
//     }
//
//     function makeSpace(quantity) {
//        let space = '';
//        for(let j=1; j<=quantity; j++) {
//            space+=' ';
//        }
//        return space;
//     }
//
//     function buildTriangle(x) {
//         let array =[];
//         let n=0;
//         let str='';
//         for (let k=1; k<=x; k++) {
//            n=x-k;
//            str=`${makeSpace(n)}${makeLine(k)}${makeSpace(n)}`;
//            array.push(str)
//         }
//         return array;
//     }
//     return buildTriangle(nFloors);
// }
// console.log(towerBuilder(8));


//////////////////////////////////

// function removeSmallest(numbers) {
//     let arrIndex=0;
//     let min= numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i]<min){
//             min=numbers[i];
//             arrIndex=i;
//         }
//     };
//
//     return numbers.slice(0,arrIndex).slice;
//     throw "TODO: removeSmallest";
// }
// console.log(removeSmallest([321, 290, 150, 285]));


function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];

}
console.log(removeSmallest([321, 290, 150, 285]));
/////////////////////////////////////////////////////////////////////////