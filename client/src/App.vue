<template>
  <div id="app">
    <h1>Traveltek</h1>
    <flight-list :flights="flights" />
    <airport-list :airports="airports" />

  </div>
</template>

<script>

import FlightList from '@/components/FlightList';
import AirportList from '@/components/AirportList';

import { eventBus  } from './main';

export default {
  name: 'app',
    data () {
    return {
      flights: [],
      airports: []
    }
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/flights")
      .then(response => response.json())
      .then(flights => this.flights = flights);

      fetch("http://localhost:3000/api/airports")
      .then(response => response.json())
      .then(airports => this.airports = airports);
    }
  },
  mounted(){
    this.fetchData();

    eventBus.$on("refresh-data", this.fetchData);
  },
  components: {
    'flight-list': FlightList,
    'airport-list': AirportList
  }
}
</script>

<style>

</style>
