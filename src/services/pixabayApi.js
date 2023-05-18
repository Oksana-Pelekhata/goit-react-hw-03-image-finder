
const API_KEY = '35007429-bea2608a7749c34e123210dde';
const BASE_URL = 'https://pixabay.com/api/';


export const fetchPictures = (name, page)  => {

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&page=${page}&per_page=12
`).then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }

      return response.json();
  });
}

