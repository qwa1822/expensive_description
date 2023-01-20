function Solution(arr){
  let n=arr.length;
  let peackCount=0;

  let aX=[-1,0,1,0]
  let aY=[0,1,0,-1]

  // 1,2

  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      let flag=1;
    }for(let k=0; k<4; k++){
      let Xor=i+ax[k];
      let Yor=j+ax[k];

      if(Xor>=0 && Yor>=0 && Xor<n && Yor<n && arr[Xor][Yor]>=arr[i][j]){
        flag=0;
        break;
      }
    }
    if(flag) peakCount++;
  }
}


let b=[[5,3,7,2,3],
[3,7,1,6,1],
[7,2,5,3,4],[
  4,3,6,4,1
],[8,7,3,5,2]]

console.log(Solution(b));