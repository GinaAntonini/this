//Example 1: call site and call stack

var fubar = "42";

function baz() {
    console.log("baz");
    bar();
}

function bar() {
    console.log("bar");
    foo();
}

function foo() {
    var fubar = "13";
    console.log("foo");
    console.log("this", this); //window
    console.log("this", this.fubar); //42 because it is defined on the window
}

baz(); //this is what is being called, so it is this

//Event listener Example

var eventFxn = function(event){
    console.log("event", event);
    console.log("event.target", event.target);
    console.log("this", this);
};

$("#my-button").click(eventFxn);


//Example 2: context objects

var a = 3;

function foo(){
    console.log("this", this);
    console.log("this.a", this.a);
}

var obj = {
    a: 2,
    monkey: foo
};

obj.monkey();

//Example 3:

function foo() {
    console.log("this", this);
    console.log("this.a", this.a);
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo();


// Example 5:

function foo(){
    console.log("this", this);
    console.log("this.a", this.a);
}

function doFoo(fn){
    return fn();
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global";

doFoo(obj.foo);

// [1, 2, 3].forEach(callbackfunction, xxx);













