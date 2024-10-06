// Placeholder planet images for demonstration
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

// Correct function name and ensure event listener works properly
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

toggleMenu();

const planetImages = {
  'star': 'url(./images/TRAPPIST-1-star.png)',
  '1b': 'url(./images/TRAPPIST-1b.png)',
  '1c': 'url(./images/TRAPPIST-1c.png)',
  '1d': 'url(./images/TRAPPIST-1d.png)',
  '1e': 'url(./images/TRAPPIST-1e.png)',
  '1f': 'url(./images/TRAPPIST-1f.png)',
  '1g': 'url(./images/TRAPPIST-1g.png)',
  '1h': 'url(./images/TRAPPIST-1h.png)'
};

const planetExplain = {
  'star': 'TRAPPIST-1 is an ultra-cool dwarf star located approximately 40 light-years away from Earth in the constellation Aquarius. It is about 12% the size of our Sun, with a surface temperature of around 2,500 Kelvin (about 2,227 degrees Celsius). Despite its relatively low temperature, TRAPPIST-1 captivates astronomers due to its remarkable planetary system, which comprises seven Earth-sized exoplanets. These planets orbit the star in a compact arrangement, leading to unique gravitational interactions and the potential for tidal locking. Its luminosity is only 0.0007 times that of the Sun, which means its habitable zone lies much closer, allowing planets to maintain potentially life-sustaining temperatures. Ongoing observations of TRAPPIST-1 are crucial for understanding how various planetary environments evolve, as this system exemplifies the diversity of planetary systems in our universe, inviting researchers to explore the possibilities of life beyond Earth.',

  '1b': 'TRAPPIST-1b is the innermost planet, completing an orbit around its star in just over 1.5 Earth days. Due to its close proximity to TRAPPIST-1, this planet experiences extreme conditions, with surface temperatures soaring over 500 degrees Celsius (932 degrees Fahrenheit). Its rapid rotation is estimated at about 1.5 days, meaning one side faces the star continuously, leading to intense stellar radiation. Although classified as a rocky planet, the harsh conditions likely render it inhospitable, preventing any significant atmosphere from forming. The study of TRAPPIST-1b provides astronomers with valuable data on the thermal dynamics of exoplanets orbiting close to their stars. By understanding the effects of high stellar radiation on planetary atmospheres and surface conditions, researchers can gain insights into the evolution of such worlds. TRAPPIST-1b is a critical piece in the puzzle of planetary formation, helping scientists refine their models of how rocky planets develop in extreme environments.',

  '1c': 'TRAPPIST-1c, the second planet, orbits its star in approximately 2.4 Earth days. It faces substantial heat from TRAPPIST-1, with surface temperatures likely around 400 degrees Celsius (752 degrees Fahrenheit). This planet rotation speed is slightly slower, contributing to a day length of roughly 2.4 days. Scientists speculate that TRAPPIST-1c may possess a dense atmosphere, potentially akin to Venus, which could trap heat and create a runaway greenhouse effect. This extreme atmospheric pressure may prevent liquid water from existing on the surface. Studying TRAPPIST-1c allows scientists to explore the consequences of intense stellar radiation on atmospheric retention and evolution. The characteristics of TRAPPIST-1c provide an opportunity to compare similar environments in our solar system, particularly concerning the fate of water and atmospheric conditions on planets subjected to strong solar emissions. Insights gained from TRAPPIST-1c will enhance our understanding of rocky planet habitability and evolution under varying conditions.',

  '1d': 'TRAPPIST-1d occupies a prominent position within the habitable zone, completing an orbit in about 4 days. This planet has a rotation period similar to its orbital period, indicating a possible tidal locking scenario. The temperature on TRAPPIST-1d may range from 0 to 50 degrees Celsius (32 to 122 degrees Fahrenheit), allowing for the potential presence of liquid water, especially if it possesses a suitable atmosphere. Its size and density are akin to Earth, making it a prime candidate for habitability studies. Researchers theorize that TRAPPIST-1d could have a robust atmosphere that supports liquid water and may even feature geological activity, potentially creating habitable conditions for microbial life. As scientists explore its climate and surface conditions, they aim to uncover whether TRAPPIST-1d could harbor life and what types of biosignatures could be detected from afar. Understanding the environmental conditions on this intriguing planet can offer critical clues about the processes that allow rocky planets to sustain life and understand the broader implications for habitability across the universe.',

  '1e': 'TRAPPIST-1e is often regarded as one of the most Earth-like exoplanets discovered to date, sitting squarely within the habitable zone. It orbits its star in about 6 days and has a size and mass similar to Earth. TRAPPIST-1e receives a suitable amount of energy from its star, suggesting that liquid water could exist on its surface, with temperatures potentially ranging between -20 to 60 degrees Celsius (-4 to 140 degrees Fahrenheit). The potential presence of a thick atmosphere could trap heat and create conditions conducive to life. Researchers are particularly interested in the possibility of weather patterns and climatic stability on TRAPPIST-1e, as they seek to understand how similar worlds might evolve. Its geological and atmospheric characteristics make it an essential subject for astrobiological research. By examining its climate, scientists aim to uncover whether TRAPPIST-1e could harbor life and what types of biosignatures could be detected from afar, refining our understanding of habitability criteria in the cosmos.',

  '1f': 'TRAPPIST-1f lies within the habitable zone and orbits its star in approximately 9.2 days. Slightly larger than Earth, it may have a rotation speed comparable to its orbital period, suggesting a similar day length. The temperatures on TRAPPIST-1f are expected to be mild, potentially allowing for the existence of liquid water on its surface, depending on its atmospheric conditions. Researchers speculate that it may possess a thicker atmosphere that could aid in retaining heat and creating a stable climate. The cooler conditions suggest that 1f might be an ocean world, with vast bodies of water covering its surface. This intriguing possibility raises questions about its climate and potential weather systems. Investigating this planet encourages discussions about the nature of habitability and the diversity of planetary environments beyond Earth. Understanding TRAPPIST-1f may reveal essential details about the formation and evolution of planets in varying conditions, challenging our current understanding of what makes a planet habitable.',

  '1g': 'TRAPPIST-1g is one of the larger planets in this unique system and occupies a location near the outer edges of the habitable zone. With an orbital period of about 12 days, its surface temperatures are expected to be lower, likely making it less favorable for liquid water. Its rotation speed is slower than that of the inner planets, resulting in longer days. Researchers speculate that TRAPPIST-1g could be classified as a mini-Neptune or a larger terrestrial planet characterized by a thick atmosphere rich in hydrogen and helium. The cooler temperatures and potential atmospheric dynamics of 1g raise questions about its habitability and geological processes. Investigating this planet encourages discussions about the nature of habitability and the diversity of planetary environments beyond Earth. Understanding TRAPPIST-1g may reveal essential details about the formation and evolution of planets in varying conditions. By expanding our perspectives on what constitutes a habitable world, researchers can refine their search for extraterrestrial life in the universe.',

  '1h': 'TRAPPIST-1h is the most distant planet from its star, residing on the fringes of the habitable zone. It has an orbital period of about 13.4 days and is likely colder than its inner neighbors, with surface temperatures possibly below freezing, making it an inhospitable environment for life as we know it. Its rotation period is similar to its orbital period, potentially leading to tidal locking. Researchers believe that TRAPPIST-1h may have once experienced warmer conditions that allowed for the presence of liquid water. By studying the geological history of this intriguing planet, scientists can gain critical insights into climate changes and the potential for subsurface oceans, similar to moons in our own solar system like Europa or Enceladus. Investigating TRAPPIST-1h expands our understanding of habitability and the diverse range of conditions that could support life. Its icy surface may hide secrets waiting to be uncovered, and exploring its potential for ancient oceans invites discussions about the broader implications for life beyond Earth.'
};


// Show the planet image and display sidebar
function showPlanet(planet) {
  const planetImageDiv = document.getElementById('planet-image');

  // Check if the planet key exists in planetImages
  if (planetImages[planet]) {
    planetImageDiv.style.backgroundImage = planetImages[planet];
    planetImageDiv.style.backgroundSize = 'cover';
    planetImageDiv.style.backgroundPosition = 'center';
  } else {
    console.error('Planet image not found');
  }

  // Update planet info based on the selected planet
  const planetInfo = document.getElementById('planet-info');
  planetInfo.innerText = `${planetExplain[planet]}.`;

  // Show the sidebar
  document.getElementById('planet-sidebar').classList.add('active');
}

// Close the sidebar
function closeSidebar() {
  document.getElementById('planet-sidebar').classList.remove('active');
}
