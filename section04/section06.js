


function Solution(a){

  let answer=0;
  let temp=[];
  let m=a.length;
  let n=a[0].length;

  for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){

      let cnt=0;


      for(let k=0; k<m; k++){
        let p1=p2=0;
        for(let v=0; v<n; v++){

          if(a[k][v]===i) p1=v
          if(a[k][v]===j) p2=v
        }

        if(p1<p2){
          cnt++;
          temp.push([i,j])
        }
      }
        if(cnt===m){
          answer++;
        
      }
    }
  }
  console.log(temp);
  return answer;


}

let arr=[[3,4,1,2],[4,3,2,1],[3,1,4,2]];
console.log(Solution(arr));

