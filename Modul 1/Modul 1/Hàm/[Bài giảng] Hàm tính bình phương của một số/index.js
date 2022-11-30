function square(number) {
    let result = number * number;
    return result;
}
function calculate() {
    let input = document.getElementById('input').value;
    let result = square(input);
    document.getElementById("result").innerHTML = result;

}

// let squareOf2 = square(2);
// document.write('Square of 2 is :' + squareOf2  + ' <br>');
//
// let squareOf5 = square(5);
// document.write('Square of 5 is :' + squareOf5);