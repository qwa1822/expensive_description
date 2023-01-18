function Solution(a){

  a=a.toLowerCase().replace(/[^a-zA-Z]/g,'');


  let len=a.length;
  

  for(let i=0; i<Math.ceil(len/2); i++){
    if(a[i]!==a[len-i-1]){
      return "NO";
    }
    return "YES";
  }
}

console.log(Solution("found7, time: study; Yduts; emit, 7Dnuof"));