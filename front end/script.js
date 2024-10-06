function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
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

function selectPlanet(name, speed, size, linkElement) {
  const planets = document.querySelectorAll('.container > div');
  planets.forEach((planet) => {
      planet.style.boxShadow = ''; 
  });

  const selectedPlanet = document.querySelector('.' + name.replace(/ /g, '-').toLowerCase());
  if (selectedPlanet) {
      selectedPlanet.style.boxShadow = '0 0 1em yellow'; 
  }

  document.getElementById('planet-info').style.display = 'block';
  document.getElementById('planet-name').innerText = name;
  document.getElementById('planet-speed').innerText = `Speed: ${speed} km/h`;
  document.getElementById('planet-size').innerText = `Size: ${size}`;

  setTimeout(() => {
      document.getElementById('planet-info').style.display = 'none';
      linkElement.classList.remove('active'); 
  }, 5000); 

  linkElement.classList.add('active');
}

document.querySelectorAll('.planet-links a').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault(); 
      const planetName = link.innerText; 
      let speed, size;

      switch (planetName) {
          case 'TRAPPIST-1b':
              speed = '8.856 miles (14.236 KM)'; 
              size = 'Orbit Every 1.5 Earth Days';
              break;
          case 'TRAPPIST-1c':
              speed = '8.718 miles (14,030 KM)'; 
              size = 'Orbit Every 2.4 Earth Days';
              break;
          case 'TRAPPIST-1d':
              speed = '6,246 miles (10,050 KM)'; 
              size = 'Orbit Every 4.05 Earth Days';
              break;
          case 'TRAPPIST-1e':
              speed = '7,292 miles (11,736 KM)'; 
              size = 'Orbit Every 6.1 Earth Days';
              break;
          case 'TRAPPIST-1f':
              speed = '8,282 miles (13,330 KM)'; 
              size = 'Orbit Every 9.2 Earth Days';
              break;
          case 'TRAPPIST-1g':
              speed = '8,950 miles (14,400 KM)';
              size = 'Orbit Every 12.4 Earth Days';
              break;
          case 'TRAPPIST-1h':
              speed = '6,142 miles (9,886 KM)';
              size = 'Orbit Every 18.9 Earth Days';
              break;
          default:
              speed = 0;
              size = 'Unknown';
              break;
      }

      selectPlanet(planetName, speed, size, link); 
  });
});
