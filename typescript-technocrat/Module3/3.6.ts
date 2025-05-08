{
// getter-setter 



class BankAccount{

    public readonly  id: number;
     public  name: string;
    protected  _balance: number;
   
       constructor(id: number, name:string, balance: number){
   
   this.id = id;
   this.name = name;
   this._balance = balance;
   
   
   
       }
   
   
//        addDeposit(amount: number){
//    this._balance = this._balance + amount
   
//        }
   
//      public  getBalance(){
//    return this._balance;
   
//        }


set deposit(amount:number){
 this._balance = this.balance + amount

}

get balance(){

    return this._balance;
}



   
   }
   
   
  
   
   const goribManusherAccount = new BankAccount(111,"loben", 50);
//    goribManusherAccount.deposit= 0;
   
//    goribManusherAccount.addDeposit(0);

goribManusherAccount.deposit = 50;


//    const myBalance = goribManusherAccount.getBalance();

const myBalance = goribManusherAccount.balance;//prperty er motto kore
   console.log(myBalance)


















}