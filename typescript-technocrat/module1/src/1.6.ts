function add(num1: number, num2:number) :number
{

    return num1+num2;
}


add(2,true)



const addArrow = (num1:number,num2:number) :number => num1+num2; 

const poorUser = {
name : 'redwan',
balance: 0,
addBalance(balance: number): string{
  return '  here is the new balance : ${this.balance+balance}';


}

}


const arr : number[] = [1,2,3,4]

const newArray:number = arr.map((elem:number): number=> elem*2)