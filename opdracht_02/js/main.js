// Get URL information
// Get the url as a string of the current webpage
const urlStr = window.location;
console.log(urlStr);
// Maken URL object (instance from the URL class)
const url = new URL(urlStr);
console.log(url);
// Get the search params friom the url object
const searchParams = url.searchParams;
const product = searchParams.get('product');
const color = searchParams.get('color');
console.log(product, color);

// The active category
const currentCategory = 'Spel, sport en recreatie';
const EVENTS_URL = 'https://www.pgm.gent/data/gentsefeesten/events.json';

// Cache elements
const $eventsList = document.querySelector('.events__list');
const $frmSearchClientSide = document.getElementById('frmSearchClientSide');
$frmSearchClientSide.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const input = ev.currentTarget.elements.txtSearchClientSide.value;

  console.log(input);
});

const fetchEventsData = async () => {
  const response = await fetch(EVENTS_URL, { methode: 'GET' });
  const data = await response.json();

  const filteredData = data.filter((event) => {
    return event.category.find((c) => c === currentCategory);
  });

  console.log(filteredData);

  $eventsList.innerHTML = renderHTMLForEvents(filteredData);
  $eventsList.querySelectorAll('.event').forEach($elem => $elem.addEventListener('click', (ev) => {
    const id = ev.currentTarget.dataset.id;
    fetchEventDataById(id);
  }));
};

const renderHTMLForEvents = (data) => {
  return data.map((obj) => `
  <div class="event" data-id="${obj.id}">
    <h3>${obj.title}</h3>
  </div>
  `).join('');
}

const fetchEventDataById = async (id) => {
  const response = await fetch(EVENTS_URL, { methode: 'GET' });
  const data = await response.json();

  const event = data.find(ev => ev.id === id);
}


const init = () => {
  fetchEventsData();
};

init();