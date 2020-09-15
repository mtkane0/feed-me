const express = require('express');
const path = require('path');
const axios = require('axios');
const KEY = require('../config.js');
const app = express();
const PORT = 3030;

app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/searchBy/:zipcode', (req, res) => {
  let zip = req.params.zipcode;
  axios({
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {
      key: KEY.GMP_API_KEY,
      address: zip,
    }
  })
    .then((location) => {
      let latlong = location.data.results[0].geometry.location.lat + ',' + location.data.results[0].geometry.location.lng;
      console.log('latlong', latlong);
      axios({
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        params: {
          key: KEY.GMP_API_KEY,
          location: latlong,
          keyword: 'restaurant',
          radius: 10000,
        }
      })
        .then((places) => {
          res.send(places.data);
        })
        .catch((err) => {
          res.status(403).send(err);
        })
    })
    .catch((err) => {
      console.log('Err getting location', err);
      res.status(403).send('Invalid Request');
    })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})