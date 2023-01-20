function Solution(a){
  let answer=0;
  let row=0;
  let column=0;
  let hang=0;
  for(let i=0; i<a.length; i++){
    row=column=0;
    for(let j=0; j<a[i].length; j++){
      row+=a[i][j];
      column+=a[j][i];
    }
    answer=Math.max(answer,row,column);
    
  
  }
  row=column=0;
  for(let i=0; i<a.length; i++){
    row+=a[i][i];
    column=a[i][a.length-i-1];
  }
  answer=Math.max(answer,row,column);
  return answer;
}


let b=[
  [10,13,10,12,15],
  [12,39,30,23,11],
  [11,25,50,53,15],
  [19,27,29,37,27],
  [19,13,30,13,19],
]

console.log(Solution(b));