{

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

// type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper' 


// type Developer = FrontendDeveloper | FullstackDeveloper


// const newDeveloper : FrontendDeveloper = 'fakibazDeveloper'

// type User  = {

// name : string,
// email ?: string,
// gender : "male" | "female",
// bloodgroup : "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-",



// }

// const user1 : User = {
// name : 'redwan',
// gender: 'male',
// bloodgroup: 'A+',


// }

type FrontendDeveloper = {
skills: string[],
designation1 : 'Frontend Developer' 

}
type BackendDeveloper = {
skills: string[],
designation2 : 'Backend Developer' 

}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper  

const fullstackDeveloper : FullstackDeveloper
 ={
     skills: ['html','css','js','nodejs'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',


 }



















}