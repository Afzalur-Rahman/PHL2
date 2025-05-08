{
//statics in OOP 


class Counter{
static count: number =0;
static increament(){
return (Counter.count = Counter.count +1)

}

 static decrement(){
return (Counter.count = Counter.count-1)

}

}

const instance1 = new Counter()
console.log(Counter.increament());


const instance2 = new Counter();
console.log(Counter.increament())


const instance3 = new Counter()
console.log(Counter.increament());
























}