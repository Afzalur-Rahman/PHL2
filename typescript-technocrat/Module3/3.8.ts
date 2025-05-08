{
///polymorphism 
class Person {

    getSleep(){

console.log(`i am sleepiign for 8 hours`)

    }

}


class student extends Person{
getSleep(){
    console.log(`slleping for 7 hours`)
}



}

class developer extends Person{

getSleep(){
    console.log(`im sleeping for 6 hours`)
}

}


const getSleepingHours = (param:Person)=>{
param.getSleep()

}


const person1 = new Person();
const person2 = new student();
const person3 = new developer();



getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);






class Shape{

radius: number;

constructor(radius: number){
    
this.radius = radius;
}

getArea():number{
    return Math.PI * this.radius * this.radius;

}


}


class Circle extends Shape{

getArea():number{



}

}






    //
}