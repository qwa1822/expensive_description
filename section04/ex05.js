
function isPrime(a){

  if(a<2){
    return false;
  }
  for(let i=2; i<Math.floor(Math.sqrt(a)); i++){
    if(a%i===0){
      return false;
    }
  }
  return true;
}



function Solution(a){


  let answer=[];

  for(let x of a){
   
    let sum=0;
    let t=x;
   
    while(t){
      sum=sum*10+(t%10);
      t=Math.floor(t/10);
      
      
    }
    if(isPrime(sum)){
      answer.push(sum)
    }

    
    
  }
  return answer;

}


let b=[32,55,62,20,250,370,200,30,100];

console.log(Solution(b));