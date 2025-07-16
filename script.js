const temas = [
  "📘 Competencia Lectora: Identificar ideas principales",
  "📘 Competencia Lectora: Inferencias e interpretaciones",
  "📘 Competencia Lectora: Evaluación crítica",
  "📐 Matemática M1: Números reales",
  "📐 Matemática M1: Álgebra y ecuaciones",
  "📐 Matemática M1: Geometría básica",
  "📊 Matemática M2: Funciones y gráficas",
  "📊 Matemática M2: Probabilidades y estadística",
  "📊 Matemática M2: Modelos matemáticos",
  "🧪 Ciencias TP: Célula y procesos biológicos",
  "🧪 Ciencias TP: Reacciones químicas",
  "🧪 Ciencias TP: Movimiento y fuerzas",
  "🧪 Ciencias TP: Energía y electricidad",
  "📖 Historia: Historia de Chile",
  "📖 Historia: Historia mundial contemporánea",
  "📖 Historia: Democracia y ciudadanía"
];

const grid = document.getElementById('grid');

// Crea las cajas
temas.forEach((tema, i) => {
  const box = document.createElement('div');
  box.className = 'box locked';
  box.textContent = tema;
  box.dataset.index = i;
  grid.appendChild(box);
});

// Desbloquea el primero
const first = document.querySelector('.box[data-index="0"]');
if (first) first.classList.remove('locked');

// Lógica para marcar y desbloquear
document.querySelectorAll('.box').forEach((box, i) => {
  box.addEventListener('click', () => {
    if (box.classList.contains('locked')) return;
    box.classList.toggle('completed');
    const next = document.querySelector(`.box[data-index="${i+1}"]`);
    if (box.classList.contains('completed') && next) {
      next.classList.remove('locked');
    }
  });
});
