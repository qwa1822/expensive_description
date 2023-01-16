function Solution(arr){

  let answer=Number.MIN_SAFE_INTEGER;
  let n=arr.length;
  let row=0;
  let column=row=0;
  //00,11,22,33,44
  //0 4 , 1,3
  for(let i=0; i<n; i++){
    column=row=0;

    for(let j=0; j<n; j++){
      row+=arr[i][j];
      column+=arr[j][i];
    }
    answer=Math.max(answer,row,column);
  }

    column=row=0;
    for(let k=0; k<n; k++){
      row+=arr[k][k];
      column+=arr[k][n-k-1]


      answer=Math.max(answer,row,column);
      return answer;
    }
  }



let b=[
  [10,18,10,12,15],
  [12,39,30,23,11],
  [11,25,50,53,15],
  [19,27,29,37,27],
  [19,13,30,13,19]
]
console.log(Solution(b));