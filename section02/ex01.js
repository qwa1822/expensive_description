function Solution(arr){

  let answer=1,max=arr[0];
  for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
      answer++;
      max=arr[i];
      
    }
  }
}

let arr=[130,135,148,140,145,150,150,153];
console.log(Solution(arr));


