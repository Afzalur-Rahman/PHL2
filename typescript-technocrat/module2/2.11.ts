{
// type script er utilities 



// Pick 

type Person  = {
name: string;
age: number;
email?: string;
contactNo: string;

}


type NameAge = Pick<Person,'name'|'age'>

// omit 

type ContactInfo = Omit<Person,'name'|'age'>

// Required 

type PersonRequired = Required<Person> 

// partial 

type PersonPartial = Partial<Person>

// Read only 


type PersonReadOnly = Readonly<Person>
const person1: PersonReadOnly = {

name:'Mr.Bulu',
age: 200,
contactNo: '20202'
}

person1.name = "wjnfwj"





// record type 

type MyObj = {
a:string;
b:string;
}

type EmptyObj : {}= {}



type MyObj = Record<string,string>

const obj1 : MyObj = {

a:'aaa',
b:'bbbb'

}






}