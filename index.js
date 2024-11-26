const rainContainer = document.querySelector(".rain");
const numberOfDrops = 200;

const colors = [
  "#fff", 
  "#FFf", 
  "#FFF", 
  "#fff", 
  "#fff", 
  "#fff", 
  "#fff"  
];

const layers = [
  { className: 'layer1', size: '2px', duration: '10s' },
  { className: 'layer2', size: '4px', duration: '8s' },
  { className: 'layer3', size: '6px', duration: '6s' },
  { className: 'layer4', size: '8px', duration: '4s' }
];

for (let i = 0; i < numberOfDrops; i++) {
  const drop = document.createElement("div");
  drop.classList.add("raindrop");

  // Randomize position, delay, and color
  drop.style.left = `${Math.random() * 100}%`;
  drop.style.animationDelay = `${Math.random() * 5}s`;
  drop.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Assign a random layer class and size based on layer
  const layer = layers[Math.floor(Math.random() * layers.length)];
  drop.classList.add(layer.className);
  drop.style.width = layer.size;
  drop.style.height = layer.size;

  rainContainer.appendChild(drop);
}
