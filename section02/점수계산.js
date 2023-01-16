function solution(a){

  let sum=0;
  let cnt=0;
  for(let x of a){
    if(x===1){
      cnt++;
      sum+=cnt;
    }
    else cnt=0;
  }

  return sum;
}




console.log(solution([1,0,1,1,1,0,0,1,1,0]));