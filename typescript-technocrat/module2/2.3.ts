{

//generic type 

type GenericArray<T> = Array<T>  

// const rollNumbers : number[] = [3,6,7];
const rollNumbers : GenericArray<number> = [3,6,7];

const mentors : GenericArray<string> =['mrx','mrx2','mrx3'];

const boolArray : GenericArray<boolean>= [true, false ,true];

interface User   {
name : string ;
age: number;




}





const user: GenericArray<{name: string, age : number } > = [
  {
	name: 'Redwan',
	age: 100,
  },
  {
	name: 'Redwan',
	age: 1000,
  },



];


const add = (x: number, y: number) => x+y;

add(30,20)


//generic tuple 

type GenericTuple<X,Y> = [X,Y]
const manush : GenericTuple<string,string> = ['Mr.x','mr.y']

const UserwithID  :GenericTuple<number,{name:string ,email: string}>  = [1234,{name : 'redwan' ,email: 'uisahfui@gmail.com'}]
}















}