{
// nullable types | unknown type 

const searchName = (value:string |null) =>{

if(value){
    console.log("searching")
}

else{

    console.log("there is nothing to search")
}

searchName(null);

// unknown typeof 
const getSpeedInMeterPerSecond = (value: unknown) =>{

if(typeof value === 'number'){

    const convertedSpeed = (value*1000)/3600
console.log('the speed is ${convertedSpeed} ms^-1')


}







}

getSpeedInMeterPerSecond(1000)



}

function throwError(msg: string){
  throw new Error(msg);
  


}















}