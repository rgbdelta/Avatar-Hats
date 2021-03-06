const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler('./public/index.html', {
  cache: true,
  outDir: './dist',
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  '/api/',
  proxy({
    target: 'http://localhost:8000',
  }),
);

app.use(bundler.middleware());
app.listen(PORT);
