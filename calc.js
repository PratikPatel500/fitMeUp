function add(a, b) {
    console.log("addition =", a+b)//we will use ,c )
}

function sub(a, b) {
    console.log("substraction =", a-b)
}

function mul(a, b) {
    console.log("Multiplication =", a*b)
}

function div(a, b) {
    console.log("Division =", a/b)
}

module.exports.addition = add
module.exports.substraction = sub
module.exports.Multiplication = mul
module.exports.Divition = div

//export

/*
function add(a, b) {
    var c = a + b
    console.log("addition =", c)//we will use ,c )
}

function sub(x, y) {
    var z = x - y
    console.log("substraction =", +z)
}

function mul(x, y) {
    var z = x * y
    console.log("Multiplication =", +z)
}

function div(x, y) {
    var z = x / y
    console.log("Divition =", +z)
}
*/
/*
export
/*
add(30, 20)
sub(10, 20)
mul(10, 20)
div(10, 20)
*/