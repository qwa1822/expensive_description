function isPriem(x){
  if(x<2){
    return false;
  }

  for(let i=2; i<Math.floor(Math.sqrt(x)); i++){
    if(x%i===0){
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
    }if(isPriem(result)) 
    answer.push(result);
  }

  return answer;
}


let b=[32,55,62,20,250,370,200,30,100];

console.log(Solution(b));