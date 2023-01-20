function Solution(a){


  let answer=[];

  let m=a.length;
  let n=a[0].length;

  for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
      

      let count=0;

      for(let k=0; k<m; k++){
        const gi=a[k].indexOf(i);
        const gk=a[k].indexOf(j);
      
      if(gi<gk){
        count++;
      }
      if(count===m) answer++;
    }


  }
  
}
return answer;

}

let arr = [[3,4,1,2], [4,3,2,1], [3,1,4,2]];
console.log(Solution(arr));

