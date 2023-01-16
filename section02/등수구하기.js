

function Solution(a){

  let n=a.length;
  let answer=Array.from({length:n},()=>1);


  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(a[j]>a[i]) answer[i]++;
    }
  }
  return answer;
}

console.log(Solution([87,89,92,100,76]));