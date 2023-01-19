function Solution(a){




  let max=Number.MIN_SAFE_INTEGER;
  let answer;
  for(let x of a){
    let sum=0
    let tmp=x;
    while(tmp){
      sum+=tmp%10;
      tmp=Math.floor(tmp/10);
    }
    if(sum>max){
      max=sum;
      answer=x;
    }
    else if(sum===max){
      if(x>answer) answer=x;
    }
  }
  return answer;
}


function Solution1(a){
  
  let answer,max=Number.MIN_SAFE_INTEGER;
  let sum=0;
  for(let x of a){
 
   let sum=x.toString().split('').reduce((acc,cur)=>acc+parseInt(cur),0);
  if(sum>max){
    max=sum;
    answer=x;
  }
  else if(sum===max){
    if(answer<x) answer=x;
  }
 
  }
  return answer;

}



let n=[128,460,603,40,521,137,123];

console.log(Solution(n));
console.log(Solution1(n));