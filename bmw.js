document.addEventListener("DOMContentLoaded", function() {
  const spans = document.querySelectorAll('.para1');
  spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.3}s`;
      
  });
});

function toggleText(textId) {
  const textElement = document.getElementById(textId).querySelector('.overlay-text');
  const button = document.querySelector(`button[onclick="toggleText('${textId}')"]`);
  const icon = button.querySelector('i');
  const ind = document.querySelector('.carousel-indicators');
  const prev = document.querySelector('button.carousel-control-prev');
  const next = document.querySelector('button.carousel-control-next');
  
  if (textElement.style.display === "none" || textElement.style.display === "") {
    textElement.classList.remove('fade-out');
    textElement.classList.add('fade-in');
    textElement.style.display = "block";
    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    prev.style.display = "none";
    next.style.display = "none";
    ind.style.display = "none";

  } else {
    textElement.classList.remove('fade-in');
    textElement.classList.add('fade-out');
    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    setTimeout(() => {
      textElement.style.display = "none";
      prev.style.display = "block";
      next.style.display = "block";
      ind.style.display = "block";
    }, 2200); // setTimeout to delay hiding the element until the animation completes.  
  }
}

