const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router');

app.use(cors());
app.use(bodyParser.json());

const flights = [
  {carrier: "Norwegian Air Int", depair: "BCN", destair: "LGW"},
  {carrier: "British Airways", depair: "LHR", destair: "CPT"},
  {carrier: "Emirates", depair: "DBY", destair: "BKK"},
  {carrier: "LoganAir", depair: "JHB", destair: "GLW"},
  {carrier: "Qatar", depair: "BBN", destair: "PTO"}
  ];

const airports = [
  {airport: "London Airport",abb: "LOA"},
  {airport: "Heathrow", abb: "LHR"},
  {airport: "London Stansted",abb: "STN"}
  ];


const flightsRouter = createRouter(flights);
app.use('/api/flights', flightsRouter);

const airportsRouter = createRouter(airports);
app.use('/api/airports', airportsRouter);




app.listen(3000, function () {
  console.log('App running on port 3000');
});
