function Solution(a){


  let answer='YES';

  // 소문자가 아닌것 
   a=a.toLowerCase().replace(/[^a-z]/g,'');
  
  
   if(a.split('').reverse().join('')!==a){
    return "NO";
   }
   return answer;
  

}

function Solution1(a){
  let answer="YES";
  let n=a.length;
  a=a.toLowerCase().replace(/[^a-z]/g,'');
  for(let i=0; i<Math.floor(n/2); i++){
    if(a[i]!==a[n-i-1]){
      return "no";
    }
    
  }
  return answer;
}

let n="found7, time: study; ZYduts; emit, 7Dnuof";
console.log(Solution(n));
console.log(Solution1(n));