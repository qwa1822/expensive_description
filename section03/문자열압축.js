function Solution(a){

  let count=1;
  let answer="";


  for(let i=0; i<a.length; i++){
    if(a[i]===a[i+1]){
      count++;
    } else{
      answer+=a[i];
      if(count>1){
        answer+=count;
        count=1;
      }
    
    }
  }
  return answer;
}


let b="KKHSSSSSSSSSE";
console.log(Solution(b));