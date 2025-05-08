// rest operator 


// spread operator 

const bros1: string[] = ['mir','modon','jafor']
const bros2: string[] = ['atif','aslam','xefer']


bros1.push(...bros2) 


const mentors = {

    typescript : 'redwan',
    redux : 'samiul',   
    dbms : 'samiul',
}

const mentors2 = {
    typescript : 'redwan', 
    next : 'samiul',
    cloud : 'samiul'}

    const mentorList = {
...mentors1,
...mentors2,


    }



    // rest operator 

    const greetFriends = (...friends : string[]) =>{
console.log('Hi ${friend1} ${friend2} ${friend3}'  ) 

friends.forEach((friend : string)=> console.log('Hi ${friend}'))

    }
    greetFriends('redwan','samiul','atif','kabuki')