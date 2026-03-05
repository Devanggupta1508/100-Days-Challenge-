// protype concept 

function student(name,age,mobile) {
    this.name = name;
    this.age = age;
    this.mobile = mobile;

   this.sayHii =  function (){
        console.log("Say hello "+this.name);
    }

    
}

let studentOne =  new student("Devang",22,78787878);
let studentTwo = new student("Raj",25,145457);

 console.log("sayHii function with normal function ",studentOne.sayHii===studentTwo.sayHii);   //  wastes of memory because sayHii always takes new memory because when function is created it store in heap memory 
  console.log(studentOne.student===studentTwo.student); // stored at same memory


  //now slove this problem with protype 

  function studentProto(name,age,mobile) {
     this.name = name;
    this.age = age;
    this.mobile = mobile;

   
   
   studentProto.prototype.sayHii =  function (){
    console.log("Say Hello with Prototype"+ this.name);
  }
}
  
let studentOnePro =  new studentProto("Devang",22,78787878);
let studentTwoPro = new studentProto("Raj",25,145457);

console.log(" sayHii function Used with Prototype",studentOnePro.sayHii===studentTwoPro.sayHii); 


let  arr = [10,20];

Array.prototype.push = ()=> {
    console.log("push function used");
} ;

arr.push(2);


let str = "devang";

String.prototype.toUpperCase = ()=>{
    console.log("","mai toh  nhi ker hu uppercase mai");
}


console.log(str.toUpperCase());