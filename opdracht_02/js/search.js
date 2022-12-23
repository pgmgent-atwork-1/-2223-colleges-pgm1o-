// Constants
const GENTSEFEESTEN_API_EVENTS_URL = 'https://www.pgm.gent/data/gentsefeesten/events.json';

// Get URL Search Parameters
const url = window.location;
const params = new URLSearchParams(url.search);
let searchStr = params.get('txtSearch').toLowerCase();

// Fetch the evenst data and filter by a search string
const fetchEventsBySearch = async (search) => {
  const response = await fetch(GENTSEFEESTEN_API_EVENTS_URL, { method: 'GET' });
  const data = await response.json();

  const filteredData = data.filter((event) => 
    (event.title.toLowerCase().indexOf(search) !== -1 ||
    (event.description ? event.description.toLowerCase().indexOf(search) !== -1 : true) ||
    event.location.toLowerCase().indexOf(search) !== -1));
  console.log(filteredData);
}

// Declare the init function
const init = () => {
  fetchEventsBySearch(searchStr);
}

// Call the init function
init();