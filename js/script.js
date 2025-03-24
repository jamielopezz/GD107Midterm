let box = document.getElementsByClassName('container');

// Change background color when mouse enters
function changeColor() {
     box.style.backgroundColor = 'lightgreen';
}

// Reset background color when mouse leaves
function resetColor() {
     box.style.backgroundColor = 'white';
}

box.addEventListener('mouseover', changeColor); box.addEventListener('mouseout', resetColor)