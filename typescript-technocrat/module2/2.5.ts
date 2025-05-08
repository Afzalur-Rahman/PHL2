{


//function with generics 

const createArray = (param: string):string[] => {


return [param] 

}



const createArrayWithGeneric = <T>(param: T): T[] => {


return [param] 

}

const res1 =  createArray('Bangladesh')


const resGeneric2 = createArrayWithGeneric<string>("bangladesh")



type User = { id: number; name: string};
const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: 'Me.pashan' })


// 



    
    
    const createArrayWithTuple = <T,Q>(param: T, param2: Q):[T,Q]  => {
    
     return [param,param2] ;
    
    }
    
    const res10 =  createArrayWithTuple<string, number>('Bangladesh',222)
    
    
    const resGeneric = createArrayWithTuple<string,{name:string}>("bangladesh",{
   name:'Asia'


    });
    
    
    
   const addCourseToStudent =<T>(student : T)=> {

     const course = 'Next level development'
return {
 ...student,
 course 

}

   }

   const student1 = addCourseToStudent({name: 'Mr.X',email: 'xwun@gmail.com',devType:"nextlevel"})
   const student2 = addCourseToStudent({name: 'Mr.X',email: 'xwun@gmail.com',devType:"nextlevel",hasWatch:'apple watch'})








































}