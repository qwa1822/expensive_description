

function Solution(a){


  let count=1;
  let answer=[];

  for(let i=0; i<a.length; i++){
    
    if(a[i]===a[i+1]){
      count++;
     
    } else{
      answer.push(a[i]);
      answer.push(count);
      count=1;
    }




    
  }

  return answer.join('');



}

let a="KKHSSSSSSSE";
console.log(Solution(a));