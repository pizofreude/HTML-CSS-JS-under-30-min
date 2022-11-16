// This is the normal way of debugging in JS by a print statement
console.log('This is External JavaScript File');

// This is how we declare variables in JS
var number = 10;
var string = 'Hello World, this is how we call a variable value in JS.';
var isJS = true;

// After variable declaration, we can add it to HTML page via ID and indicates
// it in JS file.
document.getElementById('box1').innerHTML = string;

// We can also do some arithmetic in JS
document.getElementById('box2').innerHTML = number + 10;

// This demonstrates Conditional Statement in JS
// Look the Output in Developer Tool under Console
if(number == 10){
    console.log('Yeah, Bruv!');
} else {
    console.log('Unfortunately, nope!');
}

// This demonstrates Loop in JS
// Output in Dev Console
for(var i=0; i < 10; i++){
    console.log(i);
}

// This demonstrates Array Loop in JS
// Output in Dev Console
var car = ['Lambo', 'Koenigsegg', 'Porsche'];

for(var i=0; i < car.length; i++){
    console.log(car[i]);
}

// This demonstrates Function() method in JS
// Output in Dev Console or any Compiler of your choice
var superbike = ['Yamaha R1', 'Kawasaki Ninja zx10r', 'Suzuki Hayabusa'];
// Then we define our superbike() function
function listSuperbike(){
    // Example of Loop in superbike listings
    for(i=0; i < superbike.length; i++){
        console.log(superbike[i]);
    }
}
// Finally we call our lovely superbike()
listSuperbike();

// This demonstrates how Event Listener works in JS
// First define tag with IDs in HTML Body tag
// We got box1 & box2 Identifiers already
// Then we add Event Listener in JS File
document.getElementById('box1').addEventListener('click', function(){
    alert('I got clickbaited!');
});

document.getElementById('box2').addEventListener('click', function(){
    alert('I was clicked and baited, gotcha Clickbait!');
});
