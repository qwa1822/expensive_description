function Solution(a){

  let sum=0;
  let b=0;
  let max=Number.MAX_SAFE_INTEGER;
  for(let x of a){
    if(x%2!==0){
      
      sum+=x;
      if(max>x){
        max=x;
      }
    } 
  }

  return sum,max
}


console.log(Solution([12,77,38,41,53,92,85]));