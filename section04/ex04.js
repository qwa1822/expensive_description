function SOlution(a){


 
  let max=Number.MIN_SAFE_INTEGER;
  let answer;
  for(let x of a){

    let sum=0;
    let b=x;
    

    
    while(b){
      sum+=b%10;
      b=Math.floor(b/10);

      
    } if(sum>max){
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



  let max=Number.MIN_SAFE_INTEGER;
  let answer;
  for(let x of a){
    let sum=x.toString().split('').reduce((acc,cur)=>acc+Number(cur),0);

    if(max<sum){
      max=sum;
      answer=x;
    }else if(sum===max){
      if(answer<x){
        answer=x;
      }
    }
  }
  return answer;
}
let b=[128,460,603,40,521,137,123];

console.log(SOlution(b));
console.log(Solution1(b));