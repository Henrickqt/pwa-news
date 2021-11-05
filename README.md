# PWA News

![](https://github.com/Henrickqt/pwa-news/blob/master/assets/screen.png)

This project is a news page, just like Forbes and NY Times. It was developed in RectJS and uses the concepts of Progressive Web Application (PWA).

## Technologies

This project was developed using the following technologies:

- [ReactJS](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Ant Design](https://ant.design/)

## Learning points

The following subjects are used in this project:

- PWA with React
- Service Worker Cache
- Ant Design

## How to run

First of all, clone the project.

```bash
$ git clone https://github.com/Henrickqt/pwa-news.git
```

### Backend

To start it, follow the steps below:

```bash
# Access its folder
$ cd pwa-news-api

# Install dependencies
$ npm install

# Start the project
$ npm run dev
```

The server will be available on port 5001.

### Frontend

To start it, follow the steps below:

```bash
# Access its folder
$ cd pwa-news

# Install dependencies
$ npm install

# Start the project
$ npm start
```

The app will be available in your browser at the address http://localhost:3000/.

To test the cache, enable offline mode in DevTools. If you need to clear the cache, run the following command from the DevTools console:

```bash
caches.delete('pwa-news');
```
