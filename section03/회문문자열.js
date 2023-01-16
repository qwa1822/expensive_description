


function Solution(a){
  let answer="YES";
  a=a.toLowerCase();
  if(a.split('').reverse().join('')!==a){
    return "NO";
  }
  return answer;

  

}


function Solution1(a){
  let answer="YES";
  a=a.toLowerCase();
  let len=a.length;
  for(let i=0; i<Math.floor(len/2); i++){

    if(a[i]!==a[len-i-1]) return "NO";
  }

  return answer;
}


function Solution2(a){

  let answer="YES";
  a=a.toLowerCase();
 
  if(a.split('').reverse().join('')!==a) return "NO";
  return answer;
}

let b="gooG";
let c="gooc";
let d="gooG"
console.log(Solution(b));
console.log(Solution1(c));
console.log(Solution2(d));
