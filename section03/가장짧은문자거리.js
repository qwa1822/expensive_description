

function Solution(a,b){


  let answer=[];  


  // 왼쪽부터 오른쪽끝까지 돌면서 
  // p값첫번째값은 1000으로고정
  // e를만나면 0으로변환후 ++

  let p=1000;
  // 왼쪽부터 오른쪽까지 순회
  for(let x of a){
    if(x===b){
      p=0;
      answer.push(p);
    }else{
      p++;
      answer.push(p);
    }
  }
  p=1000;
  for(let i=a.length-1; i>=0; i--){
    if(a[i]===b){
      p=0;
      // 가존에 위에서 길이를만들었기떄문에 push할필요없고 0으로변환만 해주면도미.
      answer[i]=0;
    }else{
      p++;
      answer[i]=Math.min(answer[i],p)
    }
  }
  return answer;

  // 오른쪽부터 왼쪽으로 떨어진거리
  // p를다시 1000으로고정
  // 작은값으로 교체

  



}

console.log(Solution("teachermode","e"));