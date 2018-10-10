// function expression
var test1 = function() {
    alert("Hello from test");
};


// function declaration
function test2() {
    alert("Hello from test2");
}

// function contructor

function Test3(foo, bar) {
    this.foo = foo;
    this.bar = bar;
}

var test3 = new Test3("10", 2);

