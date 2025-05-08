// // ternary operator|| optional chaining | nullish coalescing operator 

// const age:number =  15;

// if(age>=19){

//     console.log('adult')
// }
// else if(age>=13 && age<19){

// //     console.log('teenager')
// // }
// // else{

// //     console.log('child')
// // }


// const isAdult = age >= 19 ? 'adult' : 'teenager'
// console.log(isAdult)

// const isAuthenticcated = "";
// const result1 = isAuthenticcated ?? 'Guest' 
// const result2 = isAuthenticated ? isAuthenticated: 'Guest'

// console.log({result1}, {result2});

type User = {
  company: string;
  firstName: string;
  midName?: string;
  lastName: string;
  isMarried: boolean;
  address?: {
	city: string;
	road: string;
	presentaddress: string;
	permanentaddress?: string;
  };
};

const user: User = {
  company: 'TechCorp',
  firstName: 'Persian',
  lastName: 'Smith',
  isMarried: false,
  address: {
  city: 'ctg',
  road: 'kazi nazrul islam road',
  presentaddress: 'ctg',
  permanentaddress: 'dhaka', // Added permanent address to ensure the property exists
  },
};

const permanentaddress = user?.address?.permanentaddress?? 'No permament address'

console.log({permanentaddress});