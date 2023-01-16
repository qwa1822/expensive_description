

function solution(a){
 
  let answer=Number.MIN_SAFE_INTEGER;

  let n=a.length;
  let sum1=0;
  let sum2=0;


  for(let i=0; i<n; i++){
    sum1=sum2=0;
    for(let j=0; j<n; j++){

      //행의합
      sum1+=a[i][j];
      //열의합.
      sum2+=a[j][i];

    }
    answer=Math.max(answer,sum1,sum2);
    
    sum1=sum2=0;
    for(let i=0; i<n; i++){

      //0,0  1,1 ,2,2, 3,3,4,4
      sum1+=a[i][i];
      //0,4 
      sum2+=a[i][n-i-1];
    }
    answer=Math.max(answer,sum1,sum2);
  }



  return answer;

}

let b=[[10,13,10,12,15],
[12,39,30,23,11],
[11,25,50,53,15],
[19,27,29,37,27],
[19,13,30,13,19]]
console.log(solution(b));