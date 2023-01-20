


function Solution(m,arr)
{

  let answer=0;
  let c=arr.length;

   arr.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]));

  for(let i=0; i<c; i++){
    let count=1;
    let price=m-(arr[i][0]/2+arr[i][1]);

    for(let j=0; j<c; j++){

      if(i!==j && arr[j][0]+arr[j][1]>price) break;
      if(i!==j && arr[j][0]+arr[j][1]<=price){
          price-=(arr[j][0]+arr[j][1]);
          count++;
      }
    }
    answer=Math.max(answer,count);
  }
  return answer;
}


let arr=[[6,6],[2,2],[4,3],[4,5],[10,3]];

console.log(Solution(28,arr));