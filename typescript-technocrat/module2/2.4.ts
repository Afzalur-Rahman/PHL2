{

// interface generic  

interface Developer<T,X=null> {
name: string;
computer: {
   
    brand : string;
    model: string;
    releaseYear : number



}

smartWatch: T  


bike? : X





}

type EmailWatch = {


    brand:string;
    model:string;
    display:string;


}

const poorDeveloper : Developer<EmailWatch> ={
name: 'Persian' ,
computer : {
 brand : 'asus',
 model: 'x-255ur',
 releaseYear : 2013,




},

smartWatch : {
  brand: 'Emilab',
  model: 'kw66',
  display: "Amoled",



}

}


//arekta


interface AppleWatch{
    brand:string;
    model:string;
    heartTrack : boolean;
    sleepMode: boolean;
    
    

}

interface YamahahBike{

model: string,
engineCapacity: string,


}

const richDeveloper : Developer<AppleWatch,YamahahBike> ={
    name: 'Rich Persian' ,
    computer : {
     brand : 'hp ',
     model: 'x-2535ur',
     releaseYear : 2019,
    
    
    
    
    },
    
    smartWatch : {
      brand: ' Apple Emilab',
      model: 'something',
       heartTrack  :true,
       sleepMode: true,
    
    
    
    },

    bike: {
       model: 'Yamaha',
       engineCapacity: '1000cc'


    }
    
    }



























}