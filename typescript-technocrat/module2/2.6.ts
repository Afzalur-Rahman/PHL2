// constraints 
{

    const addCourseToStudent =<T extends {id:number,name:string,email:string}>(student : T)=> {

        const course = 'Next level development'
   return {
    ...student,
    course 
   
   }
   
      }
   
const student3 = addCourseToStudent({emni: 'emni'})


      const student1 = addCourseToStudent({id:222 ,name: 'Mr.X',email: 'xwun@gmail.com',devType:"nextlevel"})
      const student2 = addCourseToStudent({id: 333 ,name: 'Mr.X',email: 'xwun@gmail.com',hasWatch:'apple watch'})
   























































    


















}