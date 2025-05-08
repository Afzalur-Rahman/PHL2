{
// type alias  

type Student ={
    name :string;
    age:number;
    gender: string;
    contactNo?: string;
    address: string;



}

const student1 : Student = {
name : 'redwan',
age: 23,
gender: 'male',
contactNo: '1234567890',    
address: 'ctg'
}


const student2:Student = {
name: 'redwan', 
age: 23,  
gender:  'male',
address: 'ctg'  ,   


}


const student3:Student = {
name: 'redwan', 
age: 23,  
gender:  'male',
address: 'ctg'  ,   


}



type UserName = string 
type isAdmin = boolean 

const userName :UserName = "lulla"
const isAdmin : Isadmin = true 


type Add = (num1: number,num2: number)=>number


const add: Add= (num1,num2) => num1+num2 









}



























}