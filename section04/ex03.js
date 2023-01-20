function Solution(a){
  

  let max=Number.MIN_SAFE_INTEGER;
  let answer;
  for(let x of a){
    let sum=0;
    let tmp=x;
    while(tmp){
      let t=tmp%10;
      sum+=t;
      tmp=parseInt(tmp/10);
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



let b=[128,460,603,40,521,137,123];
console.log(Solution(b));