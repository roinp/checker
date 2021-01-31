const figure = document.querySelectorAll(".figure");
const Blackcubes = document.querySelectorAll(".black");

let numberOfElement = null;
let selectedFigure = null;

figure.forEach((element, index) => {
    element.addEventListener("dragstart", event => {
        numberOfElement = index
        event.dataTransfer.setData("id", event.target.id);
        selectedFigure = event.target;
    })
})


Blackcubes.forEach((element, index) => {

    element.addEventListener("dragover", event => {   
        event.preventDefault();
    })
    
    element.addEventListener("drop", event => {
        // console.log(element.children.length)
        console.log(numberOfElement)
        console.log(index)
        if((index == numberOfElement + 4 || index == numberOfElement + 5) && !element.children.length) {
            element.appendChild(selectedFigure);       
        } else {
            event.preventDefault(); 
        }
        
         
    })
})



