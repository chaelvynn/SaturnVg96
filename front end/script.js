function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    // Increase the number of stars to 1000
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
createStars();

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  
  if (menu.classList.contains('active')) {
      hamburger.innerHTML = 'X'; 
  } else {
      hamburger.innerHTML = '&#9776;'; 
  }
}

toogleMenu();


