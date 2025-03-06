// let, const. var
//let: Block-scoped, can be reassigned, but cannot be redeclared in the same scope.
//const: Block-scoped, cannot be reassigned, but the object it points to can still be mutated.
//var: Function-scoped, can be redeclared and reassigned, can lead to unexpected behavior due to hoisting.

const [a, b] = [1, 2];
var c = 3;
let d = 4;

// a = 5; we cant reassign
// b = 6;
c = 7;
d = 8;

console.log(a, b, c, d);

// using loops
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}




