{

// generic constraints with keyof operator 

type Vehicle = {
bike:string;
car: string;
ship: string;

}

type Owner = "Bike" | "car" | "ship" //manually

type Owner2 = keyof Vehicle

const getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) => {

return obj[key];



}

const car ={


    
}

const user = {

    name: 'Mr.persian',
    age:26,
    address:'ctg',
  
  }

const result1 = getPropertyValue(user, "emni")





// user['']






























}