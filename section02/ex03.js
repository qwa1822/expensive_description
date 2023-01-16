function Solution(arr){
  let n=arr.length;
  let xorX=[-1,0,1,0]
  let yorY=[0,1,0,-1]

  let peakcount=0;

  // 1 ,2 

  let sumA=0;
  let sumB=0;
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      let flag=1;
      for(let k=0; 0<4; k++){
        let nx=i+xorX[k];
        let ny=j+yorY[k];

        if(nx>=0 && ny>=0 && ny<n && nx<n && arr[nx][ny]>arr[i][j]){
          flag=0;
          break;
        }
      }
      if(flag) peakcount++;
    
    }
  }

  return peakcount
}


let b=[[5,3,7,2,3],
[3,7,1,6,1],
[7,2,5,3,4],[
  4,3,6,4,1
],[8,7,3,5,2]]

console.log(Solution(b));