const button = document.getElementById('fetchBtn');
const URL = 'https://api.unsplash.com/';
const gallery = document.getElementById('gallery');
const loadMore = document.getElementById('loadMore');
const errorMsg = document.getElementById('error');

let nextPage;

button.addEventListener('click', async () => {
  const data = await fetchData(
    URL + 'photos',
    true,
    'orientation=portrait&count=10',
  );

  createImages(data.photos);
  setNextPage(data.link);
});

loadMore.addEventListener('click', async () => {
  const data = await fetchData(nextPage, false);
  createImages(data.photos);
  setNextPage(data.link);
});

function createImages(photos) {
  for (let i = 0; i < photos.length; i++) {
    const img = document.createElement('img');
    img.src = photos[i].urls.small;
    img.alt = photos[i].alt_description;
    gallery.appendChild(img);
  }
}

function setNextPage(link) {
  const maybeNextPage = getNextRelUrl(link);
  if (maybeNextPage) {
    loadMore.classList.remove('hidden');
    nextPage = getNextRelUrl(data.link);
  } else {
    loadMore.classList.add('hidden');
  }
}

function constructFetchUrl(url, authenticate = true, queryParams) {
  let fetchUrl = url;
  if (authenticate) {
    // UNSPLASH_ACCESS_KEY is a vairable set up in the secret.js file (don't forget to add it when doing HW)
    fetchUrl = `${fetchUrl}?client_id=${UNSPLASH_ACCESS_KEY}`;
  }

  if (!!queryParams) {
    fetchUrl = `${fetchUrl}&${queryParams}`;
  }

  return fetchUrl;
}

function getNextRelUrl(linkHeader) {
  const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
  return match ? match[1] : null;
}

async function fetchData(url, authenticate = true, queryParams, params) {
  const fetchUrl = constructFetchUrl(url, authenticate, queryParams);
  try {
    const response = await fetch(fetchUrl, params);
    if (!response.ok) {
      console.log(response);
      throw Error(
        `Error fetching data, API returned ${response.status} status code.`,
      );
    }
    const body = await response.json();

    return { link: response.headers.get('Link'), photos: body };
  } catch (error) {
    console.error(error);
    errorMsg.textContent = 'An error occured';
    console.log(errorMsg);
    errorMsg.classList.remove('hidden');
  }
}
