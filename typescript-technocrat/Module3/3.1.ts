{
// oop classes 

class Animal {



constructor( public name:string ,public species: string,public sound:string){




}

makeSound() {
  console.log(`The ${this.name} says ${this.sound}`);


}



}





const dog = new Animal("German Shephered Bhai ","dog","Ghew ghew") 
const cat = new Animal("eta persian","cat","meuu")
cat.makeSound();























}