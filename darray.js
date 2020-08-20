// let arr = [1, 2, 3, 4, 5, 6]; 
// results = []; 
// for (let i = 0; i < arr.length; i++) {
//      let newArray = arr.slice(i, i + 3); 
//      if (newArray.length < 3) { 
//          break; 
//          } 
//          results.push(newArray.reduce((a, b) => a + b, 0)); 
//          }
//           console.log(results);

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
const f_result = [];
const s_result = [];
const t_result = [];
for (let i = 0; i < 4; i++) {
  const element = arr[i];
  let sum = 0;

  for (let k = 0; k < 4; k++) {
    const element2_arr1 = element.slice(k, k + 3);
    //console.log(element2_arr1)
    sum = 0 + element2_arr1.reduce((a, b) => a + b, 0)
    f_result.push(sum); 
    
  }
  
  for (let k = 0; k < 4; k++){
  sum =  arr[i+1][k+1]
  s_result.push(sum); 
  }
  
  for (let k = 0; k < 4; k++) {
    let element3 = arr[i+2]
    const element2_arr2 = element3.slice(k, k + 3);
    sum = 0 + element2_arr2.reduce((a, b) => a + b, 0)
    t_result.push(sum); 
  }
  
}
let total= f_result.map(function (num, idx) {
    return num + s_result[idx];
  });

  let f_total= total.map(function (num, idx) {
    return num + t_result[idx];
  });

  let max = Math.max(...f_total);
console.log(max)
// console.log(f_total)

