class Person {
      constructor(name,age){
        this.name = name;
        this.age = age;
      }

      sound(){
        console.log("I am living being");
      }
}

class Student extends Person {
     
 constructor(name,age,course){
    super(name,age);
    this.cousre = course;
 }

    role(){
        console.log("I am Student");
    }
}

class Teacher extends Person {
    
    role(){
        console.log("I am teacher");
    }

    
}


let studentOne = new Student("devang",22,"BCA"); 
        studentOne.sound();
        studentOne.role();