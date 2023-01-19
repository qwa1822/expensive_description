

function isPrime(n){

  if(n<2){
    return false;
  }

  for(let i=2; i<Math.ceil(Math.sqrt(n)); i++){
    if(n%i===0){
      return false;
    }
  }

  return true;
}



function Solution(a){

  let answer=[];
  for(let x of a){
    let result=0;
      while(x){
        let tmp=x%10;
        result=result*10+tmp;
        x=parseInt(x/10);
      }
      if(isPrime(result)) answer.push(result);
  }
  return answer;
}

let b=[32,55,62,20,250,370,200,30,100];
console.log(Solution(b));