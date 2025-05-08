



function formatString(input: string, toUpper? : boolean):string{

    return toUpper !==false ? input.toUpperCase() : input.toLowerCase();
}







function filterByRating(items:{title:string; rating: number }[]):{title: string, rating: number }[]{

return items.filter(item=> item.rating >=4)

}



function concatenateArrays<T>(...arrays: T[][]): T[]{

    return arrays.reduce((acc,current) => [...acc, ...current],[]);
}




 class Vehicle {

    constructor(private make: string, private year:number){

    }

    getInfo():string{
return `Make: ${this.make} , Year : ${this.year}`;        
    }





 }

 class Car extends Vehicle{

    constructor(make: string, year : number, private model: string){

        super(make,year);

    }

    getModel(): string{

        return `Model: ${this.model}`;
    }

 }








function processValue(value: string | number): number{

    return typeof value==="string" ? value.length : value *2;
}







interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null
{
return products.length >0? products.reduce((prev,current)=>(prev.price > current.price ? prev : current)) :null

}







enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{

    return day===Day.Saturday|| day===Day.Sunday ? "Weekend" : "Weekday";
  }





  
async function squareAsync(n: number): Promise<number>{

     return new Promise((resolve,reject)=> {setTimeout(()=>{

if(n<0){ reject(new Error("Negative number not allowed"))}
else{ resolve(n*n)}},1000)

})

}

