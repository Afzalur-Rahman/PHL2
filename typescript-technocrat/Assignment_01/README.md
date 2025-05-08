  Blog 1

## Typescripts Magic in Improving Codes Quality and Maintainability

Coders who are regularly using Javascripts in their projects might have seen that the language itself can detect a decalred variables type. Though it feels like a great feature of the language but sometimes setting a suitable type of a variable or object becomes necessary and there comes the magic of Typescript. It is a superset of Javascript which allows developers to let in to the wonderland of static typing which basically enhances the code quality and help maintain it. Lets see how:

**Detects Errors Early** 

Typescrits static type system catches errorr during compile time instead of runtime which can play crucial role in finding bugs that can be hard to find in production.

**Improved Code Readability**

Codes become more predictable using the type annotations in typescript and helps coders to understand better.They can quickly see the expected data types and their usage or intentions.

**Refactoring Without Fear** 

A programmer spent hours after hours ,sometimes days on hunting bugs after changing a little bit of their codes.And here comes the typescript with some magics.It has features like interfaces, enums, and advanced type constructs making it easier to refactor large codebases safely as Typescript will highlight any type mismatches or missing implementations.

**IDE Superpowers**

This lets a programmer enjoy autocompletion that actually works, real time error highlights and refactoring tools or debugging supports with typescript

leading to greater productivity and fewer mistakes.

**Always Up to Date**

Typescript lets us use the latest Javascript features so we can stay trendy while benifiting from type safety and have the supports from modern JS.

In short,Typescript is like the magic stick that keeps on correcting our mistakes in Javascript wonderland by helping people (programmers) in building scalable,maintainable and reliable applications.

# BLOG 2

### **Confusing  Types in Typescripts: any, unknown and never**

There are several special types to handle many programming scenarios in typescript.Among them the most confusing are any ,unknown and never.

Lets see what they really are:

**ANY**

```
let value: any = 2222;
```

It removes type safety but gives maximum flexibility which might show us bugs in our beautiful codes.It disables type checking and which is how any value is allowed.It is better to avoid using it as it can be unsafe.

**Unknown**

```
let value :unknown = "brooo"
```

unknown is safer than “any” as TypeScript needs us to check the type before using the value.  It  plays important role when we are working with dynamic sources like API’s.It usually accepts any values and is safe  as type checks is enforced.

**Never**

```
function fail():never
```

It is used for functions that will never return specially those throwing error or traped into infinite loops. “Never” helps lets us know the unreachable code paths giving a clarity.So it basically represents values that never occur. 

So,programmers should use “unknown” for flexibility and safety and “never ” when there are impossible states or unreachable code to make our projects better.But using “any ” is kind of prohibited unless it becomes necessary.