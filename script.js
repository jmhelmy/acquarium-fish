const fishData = [
    {
      name: "Neon Tetra",
      image: "https://a-z-animals.com/media/2022/07/Neon-Tetra-on-bottom-of-fish-tank.jpg",
      size: "1.5 inches",
      tankSize: "10 gallons",
      temp: "70–81°F",
      aggression: "Peaceful",
      compatibility: "Good with other small fish"
    },
    {
      name: "Betta",
      image: "https://www.thesprucepets.com/thmb/9Y3IhfdxyjNMB_hScaFJt3Ym14A=/2400x0/filters:no_upscale():strip_icc()/GettyImages-1129905513-f6a80e60a2c14f4a8ab11bc49c6119e8.jpg",
      size: "2.5 inches",
      tankSize: "5 gallons",
      temp: "75–80°F",
      aggression: "Aggressive",
      compatibility: "Best kept alone or with peaceful bottom dwellers"
    }
  ];
  
  const container = document.getElementById("fish-container");
  
  fishData.forEach(fish => {
    const card = document.createElement("div");
    card.className = "fish-card";
    card.innerHTML = `
      <img src="${fish.image}" alt="${fish.name}">
      <h2>${fish.name}</h2>
      <p><strong>Size:</strong> ${fish.size}</p>
      <p><strong>Tank Size:</strong> ${fish.tankSize}</p>
      <p><strong>Temp:</strong> ${fish.temp}</p>
      <p><strong>Aggression:</strong> ${fish.aggression}</p>
      <p><strong>Compatibility:</strong> ${fish.compatibility}</p>
    `;
    container.appendChild(card);
  });
  