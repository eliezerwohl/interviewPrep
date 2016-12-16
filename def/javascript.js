//call 
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
 
say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

//apply
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
 
say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King


//bind
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}
 
var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);
 
sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King

//bind() preserves the context of this for future execution
//You might encounter situations, where you have the context but the parameters will become available only at a later time. In such situations, .bind() will come to your rescue.

// Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.

// I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array.

// Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.

// Bind is great for a lot of things. We can use it to curry functions like in the above example.
//  We can take a simple hello function and turn it into a helloJon or helloKelly. 
//  We can also use it for events like onClick where we don’t know when they’ll be fired but we know what context we want them to have.
//  