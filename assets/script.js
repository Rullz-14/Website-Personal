// Animasi Text Berjalan
const tagEl = document.querySelector('.typing-animation');
const career = ['Front-End Developer', 'Graphic Designer', 'Digital Marketing'];

let careerIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateText() {
  tagEl.innerHTML = `<h3> A Junior ${career[careerIndex].slice(0, charIndex)}</h3>`;

  if (!isDeleting && charIndex < career[careerIndex].length) {
    charIndex++;
    setTimeout(updateText, 150); 
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(updateText, 100); 
  } else if (!isDeleting && charIndex === career[careerIndex].length) {
    isDeleting = true;
    setTimeout(updateText, 1200); 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    careerIndex++;
    if (careerIndex === career.length) {
      careerIndex = 0;
    }
    setTimeout(updateText, 500);
  }
}

updateText();





