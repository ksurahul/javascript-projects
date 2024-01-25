// make a line of #'s depending on the size 
function makeLine (size){
    return '#'.repeat(size); //repeat method repeats anything before . based on the number inside the parenthesis after. in this case # = size
}

// will make a square based on size
function makeSquare (size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square = square + makeLine(size) + '\n';
    }
    return square.slice(0,-1)
}

// creates a rectangle based on width and height arguments
function makeRectangle (width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++){
    rectangle = rectangle + makeLine(width) + '\n';
    }
    return rectangle.slice(0,-1)
}

// creates a downward staircase pattern given height
function makeDownwardStairs(height) {
    let triangle = '';
    for (let i = 1; i <= height; i++){          //starting at 1 so we don't start at an empty line
        triangle = triangle + makeLine(i) + '\n'
    }
    return triangle.slice(0,-1)
}

// returns a line with exactly the number of spaces, followed by #'s followed again by number of spaces
function makeSpaceLine(numSpaces, numChars) {
    return ' '.repeat(numSpaces) + '#'.repeat(numChars) + ' '.repeat(numSpaces)
}

//creates an isoclese triangle based on height
function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++){
        triangle = triangle + makeSpaceLine(height - i - 1, 2 * i + 1) + '\n'
    }
    return triangle.slice(0,-1);
}

//make a diamond based on height
function makeDiamond(height) {
    let top = makeIsoscelesTriangle(height);
    let topString = makeIsoscelesTriangle(height).split('');
    let bottom = topString.reverse().join('');
    let diamond = top + '\n' + bottom;
    return diamond
}

console.log(makeDiamond(3));