{
// instance of guard 

class Animal {
name: string;
species: string;


constructor(name:string, species:string){
this.name = name;
this.species = species;

}


makeSound(){

console.log("I am making sound")

}

}

class Dog extends Animal {
constructor(name:string,species:string){

    super(name,species)
}

makeBark(){
console.log("I am barking")

}

}

// cat 
class Cat extends Animal {
    constructor(name:string,species:string){
    
        super(name,species)
    }
    
    makeMeaw(){
    console.log("I am mewing")
    
    }
    
    }


    const isDog = (animal: Animal)=>{

return animal instanceof Dog

    }

    const isCat = (animal: Animal)=>{

        return animal instanceof Cat
        
            }

const getAnimal = (animal: Animal)=>{

    if(isDog(animal)){
        animal.makeBark();
    }
    else if(animal instanceof Cat){


    }
    else {
        animal.makeSound();
    }

}

const dog = new Dog("Dog bhai ","dog")
const cat = new Cat("Cat Bhai","cat")


getAnimal(dog)

















  //  
}