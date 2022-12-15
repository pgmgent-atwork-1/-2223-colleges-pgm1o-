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

const loadEventsData = async () => {
  const response = await fetch(EVENTS_URL, { methode: 'GET' });
  const data = await response.json();

  const filteredData = data.filter((event) => {
    return event.category.find((c) => c === currentCategory);
  });

  console.log(filteredData);

  const matchedEvents = [];
  for (let event of data) {
    if (event.category.indexOf(currentCategory) > -1) {
      matchedEvents.push(event);
    }
  }
  console.log(matchedEvents);
};

const init = () => {
  loadEventsData();
};

init();