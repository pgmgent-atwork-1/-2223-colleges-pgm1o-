// Chache Elements
const $timeline = document.querySelector('.timeline');
const $timelineSnaps = $timeline.querySelector('.timeline__snaps');
const $knowledge = document.querySelector('.knowledge');

$timeline.style.height = `${$knowledge.clientHeight}px`;

const offsetTopOfKnowledgElement = $knowledge.offsetTop;
console.log(offsetTopOfKnowledgElement);
$knowledge.querySelectorAll('li').forEach(($elem) => {
  console.log($elem);
  const $snap = document.createElement('div');
  $snap.classList.add('snap');
  $snap.style.transform = `translateY(${$elem.offsetTop}px)`;
  $timelineSnaps.appendChild($snap);
});