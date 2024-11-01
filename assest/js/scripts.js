// Function to add hover effect
function addHoverEffect(itemId, textId, imageId, imageDirection, textDirection) {
    const hoverItem = document.getElementById(itemId);
    const hoverText = document.getElementById(textId);
    const popoutImage = document.getElementById(imageId);

    hoverItem.addEventListener('mouseover', function() {
        if (imageDirection === 'left') {
            popoutImage.style.left = '0';
        } else if (imageDirection === 'right') {
            popoutImage.style.right = '0';
        }
        popoutImage.style.opacity = '1';

        if (textDirection === 'left') {
            hoverText.style.transform = 'translateX(-50px)';
        } else if (textDirection === 'right') {
            hoverText.style.transform = 'translateX(50px)';
        }
    });

    hoverItem.addEventListener('mouseout', function() {
        if (imageDirection === 'left') {
            popoutImage.style.left = '150px';
        } else if (imageDirection === 'right') {
            popoutImage.style.right = '150px';
        }
        popoutImage.style.opacity = '0';

        hoverText.style.transform = 'translateX(0)';
    });
}

// Applying specific hover effects to each item
addHoverEffect('item1', 'text1', 'image1', 'left', 'right');
addHoverEffect('item2', 'text2', 'image2', 'right', 'left');
addHoverEffect('item3', 'text3', 'image3', 'left', 'right');
addHoverEffect('item4', 'text4', 'image4', 'right', 'left');



// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function updateCarousel() {
  const offset = -currentSlide * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function setSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 6000);



// Arrow
document.addEventListener('DOMContentLoaded', () => {
    const arrowButtons = document.querySelectorAll('.arrow-button');
  
    arrowButtons.forEach(button => {
      const hiddenText = button.querySelector('.hidden-text');
  
      button.addEventListener('mouseover', () => {
        hiddenText.style.opacity = '1';
        hiddenText.style.transform = 'translateX(0)';
      });
  
      button.addEventListener('mouseout', () => {
        hiddenText.style.opacity = '0';
        hiddenText.style.transform = 'translateX(-100%)';
      });
    });
  });
  
  

