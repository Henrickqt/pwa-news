const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const BASE_URL = 'http://localhost:5001/api';

function getNews(subject) {
  return fetch(`${BASE_URL}/${subject}`, params)
    .then((response) => response.json())
    .catch((error) => {
      console.error('An error has occured:', error);
    });
}

function getNewsById(subject, id) {
  return fetch(`${BASE_URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((error) => {
      console.error('An error has occured:', error);
    });
}

export default {
  getNews,
  getNewsById,
};
