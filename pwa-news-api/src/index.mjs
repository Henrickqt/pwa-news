import express from 'express';
import cors from 'cors';

import economy from './mocks/economy.json';
import technology from './mocks/technology.json';
import world from './mocks/world.json';

const GROUP_NEWS = {
  economy,
  technology,
  world,
};

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/api', function(request, response) {
  response.json(GROUP_NEWS);
});

app.get('/api/:subject', function(request, response) {
  const { subject } = request.params;
  response.json(GROUP_NEWS[subject]);
});

app.get('/api/:subject/:id', function(request, response) {
  const { subject, id } = request.params;

  const subjectNews = GROUP_NEWS[subject];
  const result = subjectNews.value.find(news => news.id === id);

  response.json(result);
});

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}.`);
});
