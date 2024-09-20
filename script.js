
// Alert Me 
const alertButton = document.querySelector('.section1 button');
const alertForm = document.querySelector('.section1 form');
  
alertForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = event.target.elements.name.value;
    window.alert(`Hi ${name}!`);
});
  
// Change Color
const colorButton = document.querySelector('.section2 button');
const body = document.body

let isBlue = true;
  
function changeColor() {
  if (isBlue) {
    body.style.backgroundColor = '#B0D4F1';
  } else {
    body.style.backgroundColor = '#C4D7D1';
  }

  isBlue = !isBlue;
}
  
colorButton.addEventListener('click', changeColor);
  
    // Text Tester
const textForm = document.querySelector('.section3 form');
const validateButton = document.querySelector('.section3 button');
  
    textForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const textInput = textForm.querySelector('input[name="text-input"]');
      const textValue = textInput.value;
  
      const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (validation.test(textValue)) {
        alert("Text contains special characters.");
      } else {
        alert("Text is valid.");
      }
 });
  
    // Add Text
const addTextButton = document.querySelector('.section4 button');
const heading = document.querySelector('h1');
  
    addTextButton.addEventListener('click', () => {
      heading.textContent += " Add Text";
 });