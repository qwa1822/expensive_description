class Node{
  constructor(data){
    this.data=data;
    this.next=null;
    this.count=0;
  }
}

class SinglyNode{
  constructor(){
    this.head=null;
    this.tail=null;

  }


  Add(addValue){
      let newNode=new Node(addValue);

      if(!this.head){
        this.head=newNode;
        this.tail=newNode;
      }else{
        this.tail.next=newNode;
        this.tail=newNode;
      }
      this.count++;
  }


  pop(){
    let node=this.head;
    let newnode=null;
    while(node.next){
      newnode=node;
      node=node.next;
    }

    this.tail=newnode;
    this.tail.next=null;
    this.count--;


    return node;
  }


  shift(){
    if(!this.head) return undefined;
    let temp=this.head;
    this.head=this.head.next;
    this.count--;
    if(this.count===0){
      this.taii=null;
    }

    return temp;



}