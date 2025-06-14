let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(docuement.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}