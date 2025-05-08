{

//inteface 

type User1 = {
name :string;
age: number;


};


interface User2 {
    name : string 
    age: number
    
    
    }


type UserWithRole1 = User1 & {role : string }

interface UserWithRole2 extends User2 {
role: string 




}



const user1 : UserWithRole2= {
    name : "Persian" ,
    age : 22,
    role : 'manager', 
    
    
    
    
    }


type rollNumber = number 


// js --.> object , array -- > object function --> object 

type Roll1 = number [];

interface Roll2{
[index : number ]: number

}

const rollNumber1: Roll1 = [1,2,3,4]

type Add1 =(num1: number, num2: number) => number
interface Add2 {
(num1: number, num2:number): number


}

const add = (num1: number, num2: number): number => num1 + num2


















}