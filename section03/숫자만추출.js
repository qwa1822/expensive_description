function Solution(a){

  let b=a.replace(/[a-zA-Z]/g,'');

  console.log(parseInt(b));
}

function Solution1(a){

  let answer=0;

  for(let x of a){
    // 숫자면 
    if(!isNaN(x)) answer=answer*10+Number(x);
    // parseInt 를 안쓰게되면 이렇게한다.
    // 처음에 0이니깐 0*10 해봤자 0
    // 또 0만나면 *10 해봤자 0이다.
    // 0*10+2 를하게되면 2를 집어넣는다.
    // 2*10+0 =20
    // 20*10+8=
    
  }
  

  return answer;
}

let b="goOen2T0os8esoft";
console.log(Solution(b));
console.log(Solution1(b));