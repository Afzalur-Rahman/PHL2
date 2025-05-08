{
// inheritance in opp 

class Parent{

    name : string;
    age: number;
    address: string;
  
  constructor(name:string, age:number, address: string){
  this.name = name;
  this.age = age;
  this.address = address;
  
  }
  
  getSleep(numOfhours : number){
  
      console.log(`${this.name} will sleep for ${numOfhours}`);
  
  
  }
  

}

class Student extends Parent {

    constructor(name:string, age:number, address: string){
       
        super(name,age,address)
        }

}

const student1 = new Student('Mr.student',20,'Uganda');


// teacher 

class Teacher extends Parent{
   
    designation: string;
  
  constructor(name:string, age:number, address: string, designation:string){
 super(name,age,address)
  this.designation = designation;
  }
  
 
  
  takeClass(numOfhours : number){
    console.log(`${this.name} will takee  ${numOfhours}`);

  }
  
  }



  const teacher= new Teacher('Mr.sir',40,'Uganda',"Professor");
 Teacher













}